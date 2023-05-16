import { produce } from "immer";
import { z } from "zod";
import { ensure } from "@df/spec";

export function action<Type extends string, T extends z.ZodTypeAny>(
  type: Type,
  payload: T
) {
  return z.object({ type: z.literal(type), payload });
}

export function actions<
  Actions extends readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]
>(specs: Actions) {
  return z.union(specs);
}

type ActionTypes<S, T extends { type: any; payload: unknown }> = {
  [K in T as K["type"]]: (state: S, payload: K["payload"]) => void;
};

export function safeReducer<
  State extends z.ZodTypeAny,
  Actions extends z.ZodUnion<any>
>(state: State, actions: Actions) {
  return (
    reducer: ActionTypes<z.infer<State>, z.infer<Actions>>
  ): ((state: z.infer<State>, action: z.infer<Actions>) => z.infer<State>) => {
    return produce((draft, action) => {
      ensure(actions, action);
      ensure(state, reducer[action](draft, action));
    });
  };
}
