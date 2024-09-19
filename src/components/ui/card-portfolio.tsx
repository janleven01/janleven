"use client";

import { projects } from "@/constants";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import Link from "next/link";
import { useState } from "react";

const PortfolioCard = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider pt-5 pb-10">
      {projects.map((item) => (
        <div key={item.title}>
          <div className="keen-slider__slide flex flex-col justify-between bg-background border-2 rounded-2xl">
            <div>
              <Image
                src={item.imgURL}
                alt={item.title}
                width={1007}
                height={510}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
              />
              <div className="flex flex-col gap-2 px-4 py-2 bg-card">
                <h3 className="sm:text-xl text-lg text-card-foreground font-semibold tracking-wide">
                  {item.title}
                </h3>
                <p className="sm:text-sm text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex max-lg:flex-col items-center md:justify-between">
              <div className="px-4 flex items-center gap-2 mb-2">
                {item.vercelLink && (
                  <Link href={item.vercelLink} target="_blank">
                    <Button
                      variant="outline"
                      className="flex py-2 px-3 gap-2 text-xs font-normal"
                    >
                      <Image
                        src="icons/vercel.svg"
                        alt="vercel"
                        width={16}
                        height={16}
                        className="size-4"
                      />
                      Vercel Live
                    </Button>
                  </Link>
                )}
                {item.youtubeLink && (
                  <Link href={item.youtubeLink} target="_blank">
                    <Button
                      variant="outline"
                      className="flex py-2 px-3 gap-2 text-xs font-normal"
                    >
                      <Image
                        src="icons/youtube.svg"
                        alt="vercel"
                        width={16}
                        height={16}
                        className="size-4"
                      />
                      Youtube
                    </Button>
                  </Link>
                )}
                <Link href={item.githubLink} target="_blank">
                  <Button
                    variant="outline"
                    className="flex py-2 px-3 gap-2 text-sm font-thin italic"
                  >
                    <Image
                      src="icons/github.svg"
                      alt="github"
                      width={16}
                      height={16}
                      className="size-4"
                    />
                    Repo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-2 mr-3 max-lg:mb-1">
                {item.techStack.map((icon) => (
                  <Image
                    key={icon.name}
                    src={icon.iconURL}
                    alt={icon.name}
                    width={100}
                    height={100}
                    className={`${icon.className}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute -bottom-1 right-1/2 translate-x-1/2 flex z-50 mb-1">
        {projects.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`hover:text-primary ${
              currentSlide === index
                ? "text-primary scale-125"
                : "text-muted-foreground"
            }`}
            onClick={() => {
              instanceRef.current?.moveToIdx(index);
            }}
          >
            <DotFilledIcon width={25} height={25} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
