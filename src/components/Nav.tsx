"use client"

import {
  ArrowTopRightIcon,
  CheckIcon,
  CopyIcon,
  FileTextIcon,
} from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { contacts, navLinks } from "@/constants"
import { usePathname } from "next/navigation"

const Nav = () => {
  const pathname = usePathname()
  const [copied, setCopied] = React.useState(false)

  const handleCopyButton = () => {
    navigator.clipboard.writeText("janleven01@gmail.com")
    setCopied(true)
  }

  return (
    <section className="absolute w-full py-5 z-50 ">
      <div className="container flex items-center justify-between">
        <div className="">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="logo"
              width={40}
              height={40}
              priority
              className="object-cover size-9 hover:brightness-200"
            />
          </Link>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex flex-col w-8 h-6 items-end justify-between cursor-pointer group">
                <div className="w-7 h-[3px] bg-white group-hover:w-4 transition-all duration-200 ease-in-out group-data-[state=open]:rotate-45 group-data-[state=open]:translate-y-[9px]" />
                <div className="w-3 h-[3px] bg-white group-hover:w-6 transition-all duration-200 ease-in-out group-data-[state=open]:hidden" />
                <div className="w-5 h-[3px] bg-white group-hover:w-2 transition-all duration-200 ease-in-out group-data-[state=open]:-rotate-45 group-data-[state=open]:-translate-y-3 group-data-[state=open]:w-7" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 xl:mr-12 mr-8">
              <DropdownMenuGroup>
                {navLinks.map((nav, index) => (
                  <Link href={nav.href} key={index}>
                    <DropdownMenuItem
                      className={`${
                        pathname === nav.href && "bg-secondary/50"
                      }`}
                    >
                      <nav.icon className="mr-3 size-4" />
                      <span>{nav.label}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}
                <Link
                  href="https://drive.google.com/file/d/1YEgmpk7Qau9ni-rwHH6l7bjZfhJ-uI1i/view?usp=sharing"
                  target="_blank"
                >
                  <DropdownMenuItem>
                    <FileTextIcon className="mr-3 size-4" />
                    <span>Resume</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <div className="relative">
                      <div className="absolute size-3 rounded-full bg-green-400 mr-3.5 ml-0.5"></div>
                      <div className="size-3 rounded-full bg-green-400 mr-3.5 ml-0.5 animate-ping"></div>
                    </div>
                    <span>Reach out</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {contacts.map((icon) => (
                      <Link key={icon.label} href={icon.link} target="_blank">
                        <DropdownMenuItem>
                          <Image
                            src={icon.iconURL}
                            alt={icon.label}
                            width={40}
                            height={40}
                            className="size-4 mr-3"
                          />
                          <span>{icon.label}</span>
                        </DropdownMenuItem>
                      </Link>
                    ))}
                    {copied ? (
                      <button
                        disabled
                        className="flex items-center w-full px-2 py-1.5 rounded-sm"
                      >
                        <CheckIcon stroke="4" className="mr-3 size-4" />
                        <span className="text-sm">Copied</span>
                      </button>
                    ) : (
                      <button
                        aria-label="Copy Email"
                        type="button"
                        onClick={handleCopyButton}
                        className="flex items-center w-full px-2 py-1.5 rounded-sm hover:bg-accent"
                      >
                        <CopyIcon className="mr-3 size-4" />
                        <span className="text-sm">Copy Email</span>
                      </button>
                    )}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  )
}

export default Nav
