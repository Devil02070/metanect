import Image from "next/image";
import { H2, H3, P24 } from "../typography";

export default function WhatWeShip() {
    return (
        <>
            {/* Section 3 */}
            <div
                className="bg-primary-dark h-79 relative z-80 bg-no-repeat bg-top-center bg-cover flex items-end justify-center pb-30"
                style={{ backgroundImage: "url('/patterns.png')" }}
            >
                <H2 className="text-center font-bold">What We Ship</H2>
            </div>
            <section className="sec-2 w-screen overflow-hidden border-b">
                <div className="max-w-7xl mx-auto scroll-inner space-y-4">
                    <div className="box-1 grid grid-cols-2 items-center py-25 rounded">
                        <div className="space-y-2">
                            <H3 className="font-bold w-90">Platform architecture</H3>
                            <P24 className="text-gray-300 max-w-100">Systems designed to scale, adapt, and survive real-world pressure.</P24>
                        </div>
                        <div className="ms-auto"><Image src="/vec-1.svg" alt="circle" height={493} width={493}/></div>
                    </div>

                    <div className="box-2 grid grid-cols-2 items-center py-25 rounded">
                        <div><Image src="/vec-2.svg" alt="dots" height={493} width={493} /></div>
                        <div className="space-y-2">
                            <H3 className="font-bold">Web Applications</H3>
                            <P24 className="text-gray-300 max-w-110">Production web applications Fast, secure, and built for long-term evolution not demos.</P24>
                        </div>
                    </div>

                    <div className="box-1 grid grid-cols-2 items-center py-25 rounded">
                        <div className="space-y-2">
                            <H3 className="font-bold">Web3 integration</H3>
                            <P24 className="text-gray-300 max-w-100">Applied where it adds leverage, ignored where it doesn&apos;t.</P24>
                        </div>
                        <div className="ms-auto"><Image src="/vec-3.svg" alt="circle" height={493} width={493} /></div>
                    </div>

                    <div className="box-2 grid grid-cols-2 items-center py-25 rounded">
                        <div><Image src="/vec-4.svg" alt="dots" height={493} width={540} /></div>
                        <div className="space-y-2">
                            <H3 className="font-bold w-100">Infrastructure & Performance</H3>
                            <P24 className="text-gray-300 max-w-120">Reliability engineered at the foundation, not patched later.</P24>
                        </div>
                    </div>

                    <div className="box-1 grid grid-cols-2 items-center py-25 rounded">
                        <div className="space-y-2">
                            <H3 className="font-bold">Product interfaces</H3>
                            <P24 className="text-gray-300 w-[75%]">Interfaces that prioritize clarity, speed, and user intent.</P24>
                        </div>
                        <div><Image src="/vec-5.svg" alt="circle" height={493} width={570} /></div>
                    </div>

                    <div className="box-2 grid grid-cols-2 items-center py-25 rounded">
                        <div><Image src="/vec-6.svg" alt="dots" height={493} width={498} /></div>
                        <div className="space-y-2">
                            <H3 className="font-bold">Ongoing Evolution</H3>
                            <P24 className="text-gray-300 w-[75%]">Continuous evolution Products designed to improve over time, not decay.</P24>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}