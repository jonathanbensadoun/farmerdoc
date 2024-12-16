import { MotionProps } from "framer-motion";

export interface AnimationExample {
  title: string;
  description: string;
  code: string;
  animation: {
    initial: MotionProps["initial"];
    animate: MotionProps["animate"];
    transition: MotionProps["transition"];
  };
}