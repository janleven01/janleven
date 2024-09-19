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
            A web developer with strong remote work experience and deep
            understanding of user needs
          </h1>
          <p className="mt-4 text-justify text-muted-foreground tracking-tight">
            My focus has always been on web development, but my year-long
            experience as a Product Researcher and Developer sparked a deeper
            passion for creating user-centric digital experiences. While working
            remotely, I immersed myself in market analysis and contributed to
            product design, honing my ability to translate user needs into
            engaging and innovative solutions. With a degree in computer
            engineering and a keen eye for detail, I learned how technology can
            transform ideas into impactful user experiences that drive
            meaningful engagement.
          </p>
          <p className="mt-4 text-justify text-muted-foreground tracking-tight">
            Now, I&#39;m excited to bring my unique blend of technical expertise
            and user-focused design to the world of web development. My journey
            has highlighted the power of collaboration, even in remote settings,
            and the significance of user-centric decision-making. I am eager to
            leverage these insights to develop web solutions that captivate
            users and push the boundaries of what&#39;s possible online.
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
