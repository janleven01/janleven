"use client"
import Image from "next/image"
import React, { useState } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    image: string
    className?: string
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const x = useMotionValue(0) // going to set this value on mouse move
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-3 relative group flex flex-col items-center justify-center"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -top-16 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute w-[40%] z-30 -bottom-px bg-gradient-to-r from-primary via-yellow-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base text-right">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className={`!m-0 p-2 object-top rounded-full sm:h-14 sm:w-14 h-11 w-11 border-2 border-accent bg-background relative transition duration-500 flex items-center justify-center group-hover:scale-105  ${item.className}`}
          >
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover rounded-full group-hover:z-30"
            />
          </div>
        </div>
      ))}
    </>
  )
}
