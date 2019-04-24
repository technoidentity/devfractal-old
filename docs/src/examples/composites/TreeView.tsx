import React from 'react'
import './view.css'

interface DataProps {
  readonly top: {
    readonly x: number
    readonly y: number
  }
  readonly bottom: {
    readonly y: number
    readonly z: number
  }
}

const data: DataProps = {
  top: {
    x: 1,
    y: 2,
  },
  bottom: {
    y: 2,
    z: 3,
  },
}

interface TreeViewProps {
  // @TODO: stricter type
  readonly data?: any
  readonly toggled?: boolean
  readonly name?: string
  readonly isLast?: boolean
  readonly isChildElement?: boolean
  readonly isParentToggled?: boolean
}

const TreeView: React.SFC<TreeViewProps> = ({
  data,
  toggled = true,
  name = '',
  isLast = true,
  isChildElement = false,
  isParentToggled = true,
}) => {
  const [isToggled, setIsToggled] = React.useState(toggled)

  return (
    <div
      style={{ marginLeft: isChildElement ? 16 : ` 4 +'px'` }}
      className={isParentToggled ? 'tree-element' : 'tree-element collapsed'}
    >
      <span
        className={isToggled ? 'toggler' : 'toggler closed'}
        onClick={() => setIsToggled(!isToggled)}
      />
      {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
      {Array.isArray(data) ? '[' : '{'}
      {!isToggled && '...'}
      {Object.keys(data).map((v, i, a) => (
        <React.Fragment key={i}>
          {typeof data[v] === 'object' ? (
            <TreeView
              data={data[v]}
              isLast={i === a.length - 1}
              name={Array.isArray(data) ? '' : v}
              isChildElement
              isParentToggled={isParentToggled && isToggled}
            />
          ) : (
            <p
              style={{ marginLeft: `16 + 'px'` }}
              className={isToggled ? 'tree-element' : 'tree-element collapsed'}
            >
              {Array.isArray(data) ? '' : <strong>{v}: </strong>}
              {data[v]}
              {i === a.length - 1 ? '' : ','}
            </p>
          )}
        </React.Fragment>
      ))}
      {Array.isArray(data) ? ']' : '}'}
      {!isLast ? ',' : ''}
    </div>
  )
}

export const TreeViewStructure: React.SFC<TreeViewProps> = () => (
  <TreeView data={data} name="Rectangle" />
)
