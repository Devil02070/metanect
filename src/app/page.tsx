'use client'
import Matrix from "@/components/Matrix";
import ScrollShowcase from "@/components/Scroll";
import Banner from "@/components/sections/Banner";
import BuiltAsSystem from "@/components/sections/BuiltAsSystem";
import HowWeWork from "@/components/sections/HowWeWork";
import Marquee from "@/components/sections/Marquee";
import WhatWeShip from "@/components/sections/WhatWeShip";
import { H2, H3, P24 } from "@/components/typography";
import { gsap } from "@/lib/gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Image from "next/image";
import { useEffect, } from "react"
gsap.registerPlugin(ScrollSmoother)

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }, [])

  useEffect(() => {
    const inner = document.querySelector<HTMLDivElement>(".scroll-inner");

    if (!inner) return;
    const scrollTween = gsap.to(inner, {
      y: () => -(inner.offsetHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: ".sec-2",
        scroller: "#smooth-wrapper", // only if you use ScrollSmoother
        start: "top top",
        end: () => "+=" + inner.offsetHeight,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });


    const box1 = gsap.fromTo('.box-1',
      {
        opacity: 0,
        y: 400,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.box-1',
          start: "top 90%",
          end: "top 80%",
          // markers: true,
          scrub: 3
        }
      }
    )
    const box2 = gsap.fromTo('.box-2',
      {
        opacity: 0,
        y: 400,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.box-2',
          start: "top 80%",
          end: "top 60%",
          // markers: true,
          scrub: 4
        }
      }
    )
    const box3 = gsap.fromTo('.box-3',
      {
        opacity: 0,
        y: 400,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.box-3',
          start: "top 80%",
          end: "top 60%",
          // markers: true,
          scrub: 4
        }
      }
    )
  }, []);
  return (
    <>
      <Banner />

      <BuiltAsSystem />

      <WhatWeShip />

      <Marquee/>

      <HowWeWork/>



      {/* <section className="sec-2 w-screen h-screen pb-10 overflow-hidden border-b border-dashed">
        <div
          className="bg-primary-dark h-79 relative z-80 bg-no-repeat bg-top-center bg-cover flex items-end justify-center pb-30"
          style={{ backgroundImage: "url('/patterns.png')" }}
        >
          <H2 className="text-center">Built as a system</H2>
        </div>
        <div className="max-w-400 mx-auto h-[300dvh] scroll-inner space-y-4">
          <div className="box-1 flex items-center justify-between p-8 rounded">
            <div className="space-y-2">
              <h2 className="bg-zinc-900 h-16 w-100 rounded"></h2>
              <h2 className="bg-zinc-900 h-16 w-70 rounded"></h2>
              <p className="bg-zinc-900/60 h-5 rounded"></p>
            </div>
            <div className="bg-zinc-900/40 h-100 2xl:h-130 w-130 rounded"></div>
          </div>

          <div className="box-2 flex items-center justify-between p-8 rounded">
            <div className="bg-zinc-900/40 h-130 w-130 rounded"></div>
            <div className="space-y-2">
              <h2 className="bg-zinc-900 h-16 w-100 rounded"></h2>
              <h2 className="bg-zinc-900 h-16 w-70 rounded"></h2>
              <p className="bg-zinc-900/60 h-5 rounded"></p>
            </div>
          </div>

          <div className="box-3 flex items-center justify-between p-8 rounded">
            <div className="space-y-2">
              <h2 className="bg-zinc-900 h-16 w-100 rounded"></h2>
              <h2 className="bg-zinc-900 h-16 w-70 rounded"></h2>
              <p className="bg-zinc-900/60 h-5 rounded"></p>
            </div>
            <div className="bg-zinc-900/40 h-130 w-130 rounded"></div>
          </div>
        </div>
      </section> */}

      {/* section-3 */}
      {/* <ScrollShowcase /> */}

      {/* <section className="h-screen py-20 px-10 space-y-6 pt-90">
        <div className="flex items-center gap-6 justify-center">
          <div data-speed="1" className="bg-cyan-800 p-8 rounded"></div>
          <div data-speed="0.8" className="bg-zinc-800 p-8 rounded"></div>
          <div data-speed="0.9" className="bg-purple-800 p-8 rounded"></div>
        </div>
      </section> */}
    </>
  )
}
