"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  textColor
}: {
  words: string;
  className?: string;
  textColor?: string
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.5),
        }
      );
    }, 1000); // 1 seconds delay
  
    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeout);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
      {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn("bg-clip-text text-center font-medium tracking-tight text-transparent text-2xl sm:text-4xl md:text-6xl opacity-0", textColor)}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="sm:mt-4 mt-2">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
