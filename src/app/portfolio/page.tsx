import Portfolio from "@/components/Portfolio"
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
}

const ProjectPage = () => {
  return (
    <main className="flex items-center container py-10 h-screen max-h-screen bg-grid-white/[0.08]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Portfolio />
    </main>
  )
}

export default ProjectPage
