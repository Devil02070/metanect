"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: true,
        },
      });

      textRefs.current.forEach((text, i) => {
        tl.to(
          text,
          { opacity: 1, y: 0, duration: 0.5 },
          i
        ).to(
          text,
          { opacity: 0, y: -30, duration: 0.5 },
          i + 0.5
        );
      });

      imageRefs.current.forEach((img, i) => {
        tl.to(
          img,
          { opacity: 1, scale: 1, duration: 0.5 },
          i
        ).to(
          img,
          { opacity: 0, scale: 0.95, duration: 0.5 },
          i + 0.5
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 px-10">
        
        {/* LEFT TEXT */}
        <div className="relative">
          {["Trade Faster", "Lower Fees", "Advanced Analytics"].map(
            (text, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) textRefs.current[i] = el;
                }}
                className="absolute top-0 opacity-0 translate-y-8"
              >
                <h2 className="text-4xl font-bold">{text}</h2>
                <p className="mt-4 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            )
          )}
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[400px]">
          {["/img1.png", "/img2.png", "/img3.png"].map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) imageRefs.current[i] = el;
              }}
              className="absolute inset-0 opacity-0 scale-95"
            >
                 <div className="rounded h-100 w-100 border bg-white/10"></div>
              {/* <Image
                src={src}
                alt="feature"
                fill
                className="object-contain"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const data = [
//     {
//         title: "Fast Trading",
//         description: "Execute trades instantly with low latency.",
//         image: "/images/step1.png",
//     },
//     {
//         title: "Secure Wallet",
//         description: "Your assets stay safe with non-custodial wallets.",
//         image: "/images/step2.png",
//     },
//     {
//         title: "Advanced Analytics",
//         description: "Get real-time market insights.",
//         image: "/images/step3.png",
//     },
// ];

// export default function ScrollShowcase() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         const ctx = gsap.context(() => {
//             ScrollTrigger.create({
//                 trigger: sectionRef.current,
//                 start: "top top",
//                 end: `+=${data.length * 100}%`,
//                 pin: true,
//                 scrub: true,
//                 onUpdate: (self) => {
//                     const index = Math.min(
//                         data.length - 1,
//                         Math.floor(self.progress * data.length)
//                     );
//                     setActiveIndex(index);
//                 },
//             });
//         }, sectionRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className="h-screen bg-black text-white flex items-center"
//         >
//             <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 px-8">

//                 {/* LEFT TEXT */}
//                 <div className="space-y-6">
//                     <h2 className="text-4xl font-bold">
//                         {data[activeIndex].title}
//                     </h2>
//                     <p className="text-gray-400 text-lg">
//                         {data[activeIndex].description}
//                     </p>

//                     <div className="flex gap-2 mt-8">
//                         {data.map((_, i) => (
//                             <span
//                                 key={i}
//                                 className={`h-1 w-10 rounded ${i === activeIndex ? "bg-white" : "bg-gray-700"
//                                     }`}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* RIGHT IMAGE */}
//                 <div className="relative w-full">
//                     <div className="rounded h-100 w-100 border bg-white/10"></div>
//                     {/* <Image
//             src={data[activeIndex].image}
//             alt="feature"
//             fill
//             className="object-contain transition-opacity duration-500"
//           /> */}
//                 </div>

//             </div>
//         </section>
//     );
// }
