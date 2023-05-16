import type { Options as RedaxiosOptions } from "redaxios";
import axios from "redaxios";
import type { z } from "zod";

export type Options<Spec extends z.ZodTypeAny> = RedaxiosOptions & {
  // Response spec
  readonly spec: Spec;
};

export const get =
  <Spec extends z.ZodTypeAny>(config?: Options<Spec>) =>
  async (url: string): Promise<z.infer<Spec>> => {
    const resp = (await axios.get(url, config)).data;
    const spec = config?.spec;

    return spec ? spec.parse(resp) : (resp as z.infer<Spec>);
  };

export const post =
  <Spec extends z.ZodTypeAny>(config?: Options<Spec>) =>
  async (url: string, body: unknown): Promise<z.infer<Spec>> => {
    const resp = (await axios.post(url, body, config)).data;
    const spec = config?.spec;

    return spec ? spec.parse(resp) : (resp as z.infer<Spec>);
  };

export const put =
  <Spec extends z.ZodTypeAny>(config?: Options<Spec>) =>
  async (url: string, body: unknown): Promise<z.infer<Spec>> => {
    const resp = (await axios.put(url, body, config)).data;
    const spec = config?.spec;

    return spec ? spec.parse(resp) : (resp as z.infer<Spec>);
  };

export const patch =
  <Spec extends z.ZodTypeAny>(config?: Options<Spec>) =>
  async (url: string, body: unknown): Promise<z.infer<Spec>> => {
    const resp = (await axios.patch(url, body, config)).data;
    const spec = config?.spec;

    return spec ? spec.parse(resp) : (resp as z.infer<Spec>);
  };

export const del =
  <Spec extends z.ZodTypeAny>(config?: Options<Spec>) =>
  async (url: string): Promise<z.infer<Spec>> => {
    const resp = (await axios.delete(url, config)).data;
    const spec = config?.spec;

    return spec ? spec.parse(resp) : (resp as z.infer<Spec>);
  };

export const put$ = put();
export const post$ = post();
export const get$ = get();
export const patch$ = patch();
export const del$ = del();
