import React from "react";

export const useInterval = (fn: () => void, delay: number) => {
  const callback = React.useRef<() => void>(fn);

  React.useEffect(() => {
    callback.current = fn;
  });

  React.useEffect(() => {
    const id = setInterval(() => {
      callback.current();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
};

export const useGate = () => {
  const signalled = React.useRef(false);

  const signal = React.useCallback(() => {
    signalled.current = true;
  }, []);

  return [signalled, signal] as const;
};

export const useIntersectionObserver = (
  ref: React.RefObject<any>,
  options: IntersectionObserverInit = { threshold: 0.5 }
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      observer.unobserve(node);
    };
  }, [options, ref]);

  return isIntersecting;
};

export const useInfiniteLoader = (
  element: React.RefObject<any>,
  fn: () => void
) => {
  const visible = useIntersectionObserver(element);
  React.useEffect(() => {
    if (visible) {
      fn();
    }
  }, [fn, visible]);
};
