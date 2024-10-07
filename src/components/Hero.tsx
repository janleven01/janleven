"use client"

import { LampContainer } from "./ui/lamp"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { Button } from "./ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const Hero = () => {
  const typeWriterWords = [
    { text: "Hi," },
    { text: "I'm" },
    { text: "Jan" },
    { text: "Leven," },
    { text: "a" },
    { text: "front-end" },
    { text: "Next.js" },
    { text: "Developer" },
  ]

  return (
    <section className="bg-grid-small-white/[0.1]">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-2xl sm:text-4xl md:text-6xl"
        >
          <div className="container">
            <div className="text-foreground sm:leading-normal leading-tight">
              From concepts into
            </div>
            <TextGenerateEffect
              words="Interactive Realities"
              textColor="dark:text-primary"
            />
            <TypewriterEffectSmooth
              words={typeWriterWords}
              textSize="text-xs tracking-wide sm:text-base xl:text-lg"
            />
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 3,
                duration: 1.5,
              }}
            >
              <Link href="/portfolio" scroll>
                <Button
                  variant="outline"
                  className="text-foreground tracking-normal hover:bg-primary/80 hover:text-black max-sm:text-xs"
                >
                  View my projects
                  <ArrowTopRightIcon className="ml-1" />
                </Button>
              </Link>
            </motion.span>
          </div>
        </motion.h1>
      </LampContainer>
    </section>
  )
}

export default Hero
