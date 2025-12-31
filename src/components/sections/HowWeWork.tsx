import Image from "next/image";
import { H2 } from "../typography";

export default function HowWeWork() {
    return (
        <>
            <div
                className="bg-primary-dark h-79 relative z-80 bg-no-repeat bg-top-center bg-cover flex items-end justify-center pb-30"
                style={{ backgroundImage: "url('/patterns.png')" }}
            >
                <H2 className="text-center font-bold">How We Work</H2>
            </div>

            <section className="relative overflow-hidden">
                <div className="py-50"></div>
                <div className="bg-primary-darker py-18">
                    <div className="max-w-7xl mx-auto ps-10">
                        <H2 className="font-bold max-w-[60%]">Serious products need serious thinking.</H2>
                    </div>
                </div>
                
                <Image src="/illustration.svg" alt="ruler" height={327} width={614} className="mx-auto" />
                <Image src="/ruler-left.svg" alt="ruler" height={90} width={50} className="absolute top-0 left-8 opacity-50" />
                <Image src="/ruler-right.svg" alt="ruler" height={90} width={50} className="absolute top-0 right-8 opacity-50" />
            </section>
        </>
    )
}