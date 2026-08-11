import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, visible };
}
