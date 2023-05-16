import type { Draft } from "immer";
import React from "react";
import { useImmerReducer } from "use-immer";

type ImmerHandler<State> = (state: Draft<State>) => void;

type Handlers<State> = Record<
  string,
  (...payload: any[]) => ImmerHandler<State>
>;

type Payload<Hs extends Handlers<any>, A extends keyof Hs> = Parameters<
  Hs[A]
>[number];

type Action<S extends Handlers<any>, A extends keyof S> = Payload<
  S,
  A
> extends []
  ? Readonly<{ type: A }>
  : Readonly<{ type: A; payload: Payload<S, A> }>;

type ReducerAction<State, Hs extends Handlers<State>> = {
  [A in keyof Hs]: Action<Hs, A>;
}[keyof Hs];

type ActionCreators<State, Hs extends Handlers<State>> = {
  [A in keyof Hs]: Payload<Hs, A> extends []
    ? () => Action<Hs, A>
    : (payload: Payload<Hs, A>) => Action<Hs, A>;
};

type Actions<State, Hs extends Handlers<State>> = {
  [A in keyof Hs]: Payload<Hs, A> extends []
    ? () => void
    : (payload: Payload<Hs, A>) => void;
};

type Reducer<State, Hs extends Handlers<State>> = (
  state: Draft<State>,
  action: ReducerAction<State, Hs>
) => void;

function getActionCreators<State, Hs extends Handlers<State>>(
  handlers: Hs
): ActionCreators<State, Hs> {
  const actionCreators: any = {};
  for (const type of Object.keys(handlers)) {
    actionCreators[type] = (payload: any) => ({ type, payload });
  }

  return actionCreators;
}

function getActions<State, Hs extends Handlers<State>>(
  actionCreators: ActionCreators<State, Hs>,
  dispatch: React.Dispatch<ReducerAction<State, Hs>>
) {
  const result = {} as any;
  for (const type of Object.keys(actionCreators)) {
    result[type] = (...args: any[]) => {
      dispatch((actionCreators[type] as any)(...args));
    };
  }
  return result;
}

function getReducer<State, Hs extends Handlers<State>>(
  handlers: Hs
): Reducer<State, Hs> {
  return (state, action) => {
    return handlers[action.type](
      "payload" in action ? action.payload : undefined
    )(state);
  };
}

function state$<State, Hs extends Handlers<State>>(
  initialState: State,
  handlers: Hs
): readonly [Reducer<State, Hs>, ActionCreators<State, Hs>, State] {
  return [
    getReducer<State, Hs>(handlers),
    getActionCreators<State, Hs>(handlers),
    initialState,
  ] as const;
}

function useState$<State, Hs extends Handlers<State>>(
  args: Readonly<
    [
      reducer: Reducer<State, Hs>,
      actionCreators: ActionCreators<State, Hs>,
      initialState: State
    ]
  >
): readonly [State, Actions<State, Hs>] {
  const [reducer, actionCreators, initialState] = args;
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const actions: Actions<State, Hs> = React.useMemo(
    () => getActions(actionCreators, dispatch),
    [actionCreators, dispatch] // None should change
  );

  return [state, actions] as const;
}

// @TODO: support initial state function
function useState<State, Hs extends Handlers<State>>(
  initialState: State,
  handlers: Hs
): readonly [State, Actions<State, Hs>] {
  // deliberate empty dependency array to avoid re-creating the state$ function
  const stateActions = React.useMemo(
    () => state$<State, Hs>(initialState, handlers),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return useState$(stateActions);
}

export function cstate<State, Hs extends Handlers<State>>(
  initialState: State,
  handlers: Hs
): () => readonly [State, Actions<State, Hs>] {
  return () => useState(initialState, handlers);
}
