import About from "@/components/About"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
}

const AboutPage = () => {
  return (
    <main className="w-full lg:h-screen flex justify-center items-center bg-grid-small-white/[0.1]">
      <About />
    </main>
  )
}

export default AboutPage
