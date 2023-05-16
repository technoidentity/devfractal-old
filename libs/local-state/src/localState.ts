/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/naming-convention */

import type { Draft } from "immer";
import React from "react";
import { useImmerReducer } from "use-immer";
import type { ActionCreators, Actions, ActionsFrom, Handlers } from "./types";

type Reducer<State, Hs extends Handlers<State>> = (
  state: Draft<State>,
  action: ActionsFrom<State, Hs>
) => void;

export function getActionCreators<State, Hs extends Handlers<State>>(
  handlers: Hs
): ActionCreators<State, Hs> {
  const actionCreators: any = {};
  for (const type of Object.keys(handlers)) {
    actionCreators[type] = (payload: any) => ({ type, payload });
  }

  return actionCreators;
}

export function getActions<State, Hs extends Handlers<State>>(
  actionCreators: ActionCreators<State, Hs>,
  dispatch: React.Dispatch<ActionsFrom<State, Hs>>
) {
  const result = {} as any;
  for (const type of Object.keys(actionCreators)) {
    result[type] = (...args: any[]) => {
      dispatch((actionCreators[type] as any)(...args));
    };
  }
  return result;
}

// @TODO: support many arguments as payload
export function getReducer<State, Hs extends Handlers<State>>(
  handlers: Hs
): Reducer<State, Hs> {
  return (state, action) => {
    return handlers[action.type](
      state,
      "payload" in action ? action.payload : undefined
    );
  };
}

export function state$<State, Hs extends Handlers<State>>(
  initialState: State,
  handlers: Hs
): readonly [Reducer<State, Hs>, ActionCreators<State, Hs>, State] {
  return [
    getReducer<State, Hs>(handlers),
    getActionCreators<State, Hs>(handlers),
    initialState,
  ] as const;
}

export function useState$<State, Hs extends Handlers<State>>(
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
export function useState<State, Hs extends Handlers<State>>(
  initialState: State,
  handlers: Hs
): readonly [State, Actions<State, Hs>] {
  // deliberate empty dependency array to avoid re-creating the state$ function
  const stateActions = React.useMemo(
    () => state$<State, Hs>(initialState, handlers),
    []
  );

  return useState$(stateActions);
}

export function state<State, Hs extends Handlers<State>>(
  initialState: State,
  handlers: Hs
): () => readonly [State, Actions<State, Hs>] {
  return () => useState(initialState, handlers);
}
