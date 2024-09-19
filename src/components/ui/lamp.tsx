"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-md z-0",
        className
      )}
    >
      <div className="absolute top-1/3 flex w-full flex-1 items-center justify-center isolate z-20">

        {/* Lamp Left */}
        <motion.div
          initial={{ opacity: 1, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible max-sm:max-w-[15rem] w-[30rem] bg-gradient-conic from-primary via-transparent to-transparent text-white [--conic-position:from_55deg_at_center_top]"
        >
          <div className="absolute w-[100%] dark:bg-grid-small-white/[0.1] left-0 bg-background h-56 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Lamp right */}
        <motion.div
          initial={{ opacity: 1, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 max-sm:max-w-[15rem] w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary text-white [--conic-position:from_305deg_at_center_top]"
        >
          <div className="absolute w-[100%] dark:bg-grid-small-white/[0.1] bg-background right-0 h-56 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>


        {/* Top Light */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"></div>

        
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 max-sm:max-w-[15rem] w-[30rem] -translate-y-[7rem] bg-primary"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] "></div>
      </div>

      <div className="absolute z-50 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
