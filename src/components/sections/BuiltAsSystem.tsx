import Image from "next/image";
import { H2, H3, P24 } from "../typography";

export default function BuiltAsSystem() {
    return (
        <>
            {/* seciton2 */}
            <div
                className="bg-primary-dark h-79 relative z-80 bg-no-repeat bg-top-center bg-cover flex items-end justify-center pb-30"
                style={{ backgroundImage: "url('/patterns.png')" }}
            >
                <H2 className="text-center font-bold">Built as a system</H2>
            </div>

            <section className="sec-2 w-screen h-screen overflow-hidden border-b">
                <div
                    className="max-w-7xl mx-auto h-[260dvh] scroll-inner space-y-4 bg-no-repeat bg-center"
                    style={{ backgroundImage: "url('/Line.svg')" }}
                >
                    <div className="box-1 flex items-center justify-between pb-8 rounded">
                        <div className="space-y-2">
                            <H3 className="font-bold w-90">We design for pressure.</H3>
                            <P24 className="text-gray-300 w-90">Anyone can ship a website. We build platforms that hold up under growth, traffic, and change.</P24>
                        </div>
                        <div className="">
                            <Image src="/circle.svg" alt="circle" height={568} width={568} />
                        </div>
                    </div>

                    <div className="box-2 flex items-center justify-between p-8 rounded">
                        <div className="">
                            <Image src="/box.svg" alt="dots" height={568} width={568} />
                        </div>
                        <div className="space-y-2">
                            <H3 className="font-bold w-90">Web3 is leverage.</H3>
                            <P24 className="text-gray-300 w-90">Modular, experimental and strong</P24>
                        </div>
                    </div>

                    <div className="box-3 flex items-center justify-between p-8 rounded">
                        <div className="space-y-2">
                            <H3 className="font-bold w-90">Web2 is the backbone.</H3>
                            <P24 className="text-gray-300 w-90">Stable, proven, predictable.</P24>
                        </div>
                        <div className="">
                            <Image src="/dots.svg" alt="dots" height={568} width={568} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}