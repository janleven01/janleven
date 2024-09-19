"use client"
import React, { useRef } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion } from "framer-motion"
import { HoverEffect } from "./card-hover-effect"
import Image from "next/image"
import Link from "next/link"

interface DescriptionProps {
  title: string
  description: string
}

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string
    companyName?: string
    jobDuration?: string
    descriptions?: DescriptionProps[]
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length + 1

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <motion.div
      className="h-[28rem] overflow-y-auto items-start relative rounded-md max-w-[1280px] my-10 scrollbar-thin cursor-default scrollbar-thumb-primary px-4"
      ref={ref}
    >
      <h2 className="text-4xl font-medium">Experience</h2>
      <div className="div relative flex items-start my-5 border-l-2 border-dashed">
        <div className="lg:max-w-2xl ml-5 flex flex-col gap-4">
          {content.map((item, index) => (
            <div key={item.title + index} className="relative">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
              >
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <h3 className="text-lg">{item.companyName}</h3>
                <h3 className="text-sm">{item.jobDuration}</h3>
              </motion.div>
              <motion.ul
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                role="list"
                className="list-disc w-full lg:max-w-lg mt-3 px-5 space-y-1"
              >
                {item.descriptions?.map((description, index) => (
                  <li key={index}>
                    <span className="font-semibold">{description.title}</span>{" "}
                    {description.description}
                  </li>
                ))}
              </motion.ul>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                }}
                className="absolute w-4 h-4 -left-[29px] top-2 rounded-full bg-primary"
              />
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: activeCard === 1 ? 1 : 0.3,
        }}
      >
        <h2 className="text-4xl font-medium">Education</h2>
        <div className="relative border-l-2 border-dashed  my-2">
          <div className="ml-5 ">
            <h2 className="sm:text-lg font-medium pt-2">
              Mindanao State University - Iligan Institute of Technology
              (MSU-IIT)
            </h2>
            <div className="flex items-center gap-5">
              <div>
                <p className="text-sm text-muted-foreground">
                  BS in Computer Engineering
                </p>
                <p className="text-xs text-muted-foreground">2018-2023</p>
              </div>
              <Image
                src="/msuiit_logo.png"
                alt="msuiit"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="text-lg py-1">Thesis</div>
            <ul className="pl-5 list-disc">
              <li className="">
                Developed a smart parking system using Python and YOLOv5
                (implemented using PyTorch) models,
              </li>
              <li>
                Leveraging deep learning approach to detect available and
                unavailable parking spaces using surveillance cameras, providing
                cost-effective and detailed parking information.
              </li>
            </ul>
          </div>
          <div className="absolute w-4 h-4 -left-[9px] top-3.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </motion.div>
  )
}
