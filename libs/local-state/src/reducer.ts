/* eslint-disable @typescript-eslint/naming-convention */

export type ReducerObject<State> = Record<
  string,
  (state: State, payload: any) => State
>;

type Payload<
  Reducers extends ReducerObject<any>,
  Action extends keyof Reducers
> = Parameters<Reducers[Action]>[1];

type ActionResult<
  Reducers extends ReducerObject<any>,
  Action extends keyof Reducers
> = Payload<Reducers, Action> extends undefined
  ? {
      type: Action;
      payload: Payload<Reducers, Action>;
    }
  : {
      type: Action;
    };

type ActionsFrom<State, Reducers extends ReducerObject<State>> = {
  [Action in keyof Reducers]: ActionResult<Reducers, Action>;
}[keyof Reducers];

type ActionsCreators<State, Reducers extends ReducerObject<State>> = {
  [Action in keyof Reducers]: Payload<Reducers, Action> extends undefined
    ? () => ActionResult<Reducers, Action>
    : (payload: Payload<Reducers, Action>) => ActionResult<Reducers, Action>;
};
type Reducer<State, Reducers extends ReducerObject<State>> = (
  state: State,
  action: ActionsFrom<State, Reducers>
) => void;

export function reducer<State, Reducers extends ReducerObject<State>>(
  initialState: State,
  slices: Reducers
): readonly [
  Reducer<State, Reducers>,
  ActionsCreators<State, Reducers>,
  State
] {
  const fn: Reducer<State, Reducers> = (state, action) => {
    return slices[action.type](
      state,
      "payload" in action ? action.payload : undefined
    );
  };

  const actions: ActionsCreators<State, Reducers> = {} as any;
  for (const type of Object.keys(slices)) {
    (actions as any)[type] = (payload: any) => ({ type, payload });
  }

  return [fn, actions, initialState] as const;
}
