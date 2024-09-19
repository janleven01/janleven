"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { useEffect, useState } from "react";
import PortfolioCard from "./ui/card-portfolio";

const Portfolio = () => {
  const words = ["curiosity", "effort", "commitment", "best-practices"];
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="m-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="grid place-items-center max-w-screen-2xl max-sm:pt-7"
      >
        <div className="mb-2">
          <h2 className="text-center sm:text-base text-sm">
            Take a look at the projects I’ve brought to life.
          </h2>
          <h1 className="text-center sm:text-5xl text-3xl font-semibold mt-3 w-full">
            Built with
            <span className="sm:hidden">
              <br />
            </span>
            <FlipWords words={words} />
            <br />
            <span className="lg:text-3xl sm:text-2xl text-base">
              & a lot of caffeine...
            </span>
          </h1>
        </div>

        <PortfolioCard />
        
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-5 right-5 bg-background z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 0.5,
              ease: "easeInOut",
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          >
            <div className="border p-4 rounded-md">
              <h4 className="text-white text-sm font-semibold">
                Head&apos;s up!
              </h4>
              <p className="text-muted-foreground text-xs">
                You can drag to navigate through the projects
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
