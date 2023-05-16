import type { Draft } from "immer";

export type Handlers<State> = Record<
  string,
  (state: Draft<State>, payload: any) => void
>;
// @TODO: Support multiple parameters
type Payload<S extends Handlers<any>, A extends keyof S> = Parameters<S[A]>[1];

export type Action<S extends Handlers<any>, A extends keyof S> = Payload<
  S,
  A
> extends undefined
  ? Readonly<{ type: A }>
  : Readonly<{ type: A; payload: Payload<S, A> }>;

export type ActionsFrom<State, Hs extends Handlers<State>> = {
  [A in keyof Hs]: Action<Hs, A>;
}[keyof Hs];

export type ActionCreators<State, Hs extends Handlers<State>> = {
  [A in keyof Hs]: Payload<Hs, A> extends undefined
    ? () => Action<Hs, A>
    : (payload: Payload<Hs, A>) => Action<Hs, A>;
};

export type Actions<State, Hs extends Handlers<State>> = {
  [A in keyof Hs]: Payload<Hs, A> extends undefined
    ? () => void
    : (payload: Payload<Hs, A>) => void;
};
