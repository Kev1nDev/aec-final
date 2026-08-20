import { useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "../lib/cn";

type MarqueeProps = {
  children: string;
  className?: string;
  direction?: "left" | "right";
  baseVelocity: number;
};

export function Marquee({
  children,
  className,
  direction = "left",
  baseVelocity = 10,
}: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const shouldReduceMotion = useReducedMotion();

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    if (shouldReduceMotion) {
      return;
    }

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (direction === "left") {
      directionFactor.current = 1;
    } else if (direction === "right") {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("relative w-full overflow-hidden", className)}>
        <m.div
          className="flex py-2.5 font-display text-[clamp(18px,2.5vw,28px)] font-normal tracking-[2px] text-white uppercase whitespace-nowrap max-sm:py-2 max-sm:text-sm"
          style={{ x }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="mr-9 block shrink-0 max-sm:mr-6">
              {children}
            </span>
          ))}
        </m.div>
      </div>
    </LazyMotion>
  );
}
