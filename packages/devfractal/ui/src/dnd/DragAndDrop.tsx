import Grid from '@material-ui/core/Grid'
import React from 'react'
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  DraggingStyle,
  Droppable,
  DropResult,
  NotDraggingStyle
} from 'react-beautiful-dnd'

function reorder<T>(
  list: ReadonlyArray<T>,
  startIndex: number,
  endIndex: number,
): ReadonlyArray<T> {
  const result: T[] = Array.from(list)
  console.log(result)
  // tslint:disable-next-line: no-array-mutation
  const [removed] = result.splice(startIndex, 1)
  // tslint:disable-next-line: no-array-mutation
  result.splice(endIndex, 0, removed)

  return result
}

const grid: number = 8

function getItemStyle(
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
): React.CSSProperties | undefined {
  return {
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle,
  }
}
function getListStyle(
  isDraggingOver: boolean,
): React.CSSProperties | undefined {
  return {
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
  }
}

type DragAndDropDataList<T> = ReadonlyArray<T & { readonly id: string }>
type DragAndDropData<T> = T & { readonly id: string }

export interface DragAndDrop<T> {
  readonly dataList1: DragAndDropDataList<T>
  readonly dataList2: DragAndDropDataList<T>
  contentName(item: T): string
}

export interface DNDDroppableProps<T>
  extends Pick<DragAndDrop<T>, 'contentName'> {
  readonly items: DragAndDropDataList<T>
  readonly droppableId: string
}

export interface DNDDraggableProps<T>
  extends Pick<DragAndDrop<T>, 'contentName'> {
  readonly item: DragAndDropData<T>
  readonly index: number
}

function DNDDraggable<T>(args: DNDDraggableProps<T>): JSX.Element {
  const { item, index, contentName } = args
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={(instance: HTMLDivElement | null) => provided.innerRef(instance)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
          )}
        >
          {contentName(item)}
        </div>
      )}
    </Draggable>
  )
}

function DNDDroppable<T>(args: DNDDroppableProps<T>): JSX.Element {
  const { items, contentName, droppableId } = args
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={(instance: HTMLDivElement | null) => provided.innerRef(instance)}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {items.map((item, index: number) => (
            <DNDDraggable
              key={item.id}
              contentName={contentName}
              index={index}
              item={item}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

interface ItemsState<T> {
  readonly items: DragAndDropDataList<T>
  readonly selected: DragAndDropDataList<T>
}

interface ResultAfterDrop<T> {
  readonly droppable1: DragAndDropDataList<T>;
  readonly droppable2: DragAndDropDataList<T>;
}
export function DragAndDrop<T>(args: DragAndDrop<T>): JSX.Element {
  const { dataList1, dataList2, contentName } = args

  const [items, setItems] = React.useState<ItemsState<T>>({ items: dataList1, selected: dataList2 })

  const id2List: { readonly droppable1: string, readonly droppable2: string } = {
    droppable1: 'items',
    droppable2: 'selected'
  };

  function getList(id: string): DragAndDropDataList<T> { return items[id2List[id]] };

  function move(source: DragAndDropDataList<T>, destination: DragAndDropDataList<T>,
    droppableSource: DraggableLocation, droppableDestination: DraggableLocation): ResultAfterDrop<T> {
    const sourceClone: T[] = Array.from(source);
    const destClone: T[] = Array.from(destination);
    // tslint:disable-next-line: no-array-mutation
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    // tslint:disable-next-line: no-array-mutation
    destClone.splice(droppableDestination.index, 0, removed);

    const result: ResultAfterDrop<T> = { droppable1: [], droppable2: [] };
    // tslint:disable-next-line: no-object-mutation
    result[droppableSource.droppableId] = sourceClone;
    // tslint:disable-next-line: no-object-mutation
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  function onDragEnd(result: DropResult): void {

    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {

      const resultItems: DragAndDropDataList<T> = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );
      if (source.droppableId === 'droppable2') {
        setItems({ items: items.items, selected: resultItems });
      }

    } else {
      const result: ResultAfterDrop<T> = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );
      setItems({
        items: result.droppable1,
        selected: result.droppable2
      });
    }

  }

  return (

    <Grid container spacing={3}>
      <DragDropContext
        onDragEnd={(result: DropResult, _) => onDragEnd(result)}
      >
        <Grid item xs={12} sm={6}>
          <DNDDroppable droppableId="droppable1" items={items.items} contentName={contentName} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DNDDroppable droppableId="droppable2" items={items.selected} contentName={contentName} />
        </Grid>
      </DragDropContext>
    </Grid>
  )
}
