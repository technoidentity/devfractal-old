import type { Draft } from "immer";
import type { Dispatch, ReducerAction } from "react";
import React from "react";
import invariant from "tiny-invariant";
import { useImmerReducer } from "use-immer";

export const useIsomorphicEffect =
  typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;

type Actions<S, A> = (prevState: Draft<S>, action: A) => void;

type State<R extends Actions<any, any>> = R extends Actions<infer S, any>
  ? S
  : never;

type Selector<R extends Actions<any, any>, A> = (snapshot: State<R>) => A;

export function tree$<R extends Actions<any, any>>(
  initialState: State<R>,
  actions: R
) {
  const StateContext = React.createContext<State<R> | undefined>(undefined);

  const DispatchContext = React.createContext<
    Dispatch<ReducerAction<R>> | undefined
  >(undefined);

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useImmerReducer(actions, initialState);

    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  };

  const useValue = () => {
    const ctx = React.useContext(StateContext);
    invariant(ctx !== undefined, "Need slice Provider");
    return ctx;
  };

  const useDispatch = () => {
    const ctx = React.useContext(DispatchContext);
    invariant(ctx !== undefined, "Need slice Provider");

    return ctx;
  };

  function useAction<Args extends any[]>(
    handler: (...args: Args) => ReducerAction<R>
  ) {
    const ref = React.useRef(handler);
    const dispatch = useDispatch();

    useIsomorphicEffect(() => {
      ref.current = handler;
    });

    return React.useCallback(
      (...args: Args) => {
        dispatch(ref.current(...args));
      },
      [dispatch]
    );
  }

  function useSelect<A>(select: Selector<R, A>): A {
    const snapshot = useValue();
    const ref = React.useRef(select);
    useIsomorphicEffect(() => {
      ref.current = select;
    });
    return React.useMemo(() => ref.current(snapshot), [snapshot]);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  return { Provider, useValue, useDispatch, useSelect, useAction };
}
