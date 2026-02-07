"use client"

import { motion } from "framer-motion"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { content, techStack } from "@/constants"
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const About = () => {
  return (
    <div className="container lg:h-[30rem] w-full mt-20 mb-10 flex max-lg:flex-col items-center justify-center gap-5">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-between h-[30rem] basis-1/2"
      >
        <div className="">
          <h2 className="text-xl text-start text-primary">About me</h2>
          <h1 className="sm:text-4xl text-3xl font-medium py-3 tracking-tighter">
            A Data-Driven Product Researcher & Web Developer with deep
            understanding of product opportunities and market potential.
          </h1>
          <p className="mt-4 text-justify text-muted-foreground tracking-tight">
            I am a hybrid professional who combines the methodical precision of
            a Computer Engineer with the creative data-driven strategy of Amazon
            Product Research. Unlike typical researchers, I use my technical
            background to find winning products at scale and I analyze the data
            behind them to ensure they are winners.
          </p>
          <p className="mt-4 text-justify text-muted-foreground tracking-tight">
            Now, I&#39;m excited to bring my unique blend of technical expertise
            and user-focused design to the world of e-commerce and web
            development. My journey has highlighted the power of collaboration,
            even in remote settings, and the significance of user-centric
            decision-making. I am eager to leverage these insights to develop
            web solutions that captivate users and push the boundaries of
            what&#39;s possible online.
          </p>
        </div>
        <div className="flex items-center lg:justify-start justify-center w-full my-5">
          <AnimatedTooltip items={techStack} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="basis-1/2 w-full"
      >
        <StickyScroll content={content} />
      </motion.div>
    </div>
  )
}

export default About
