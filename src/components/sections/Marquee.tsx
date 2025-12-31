import Image from "next/image";
import { H2 } from "../typography";
import { Button } from "../ui/button";

export default function Marquee() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="bg-primary-darker py-18">
                    <div className="max-w-7xl mx-auto ps-10">
                        <H2 className="font-bold max-w-[60%]">Built for teams that care about long-term outcomes.</H2>

                    </div>
                </div>
                <div className="py-19">
                    <div className="max-w-7xl relative overflow-hidden mx-auto ps-10 space-y-4">
                        <div className="flex items-center gap-90 marquee-left">
                            <Button>Easy to track</Button>
                            <Button>SaaS delivered</Button>
                            <Button>e-commerce web</Button>
                            <Button>Tokenization</Button>
                            <Button>MVP Shipped</Button>
                            <Button>e-commerce web</Button>
                            <Button>API integrating...</Button>
                            <Button>Building on L1</Button>
                            <Button>Decentralized systems</Button>
                        </div>

                        <div className="flex items-center gap-50 marquee-right">
                            <Button>Easy to track</Button>
                            <Button>SaaS delivered</Button>
                            <Button>e-commerce web</Button>
                            <Button>Tokenization</Button>
                            <Button>MVP Shipped</Button>
                            <Button>e-commerce web</Button>
                            <Button>API integrating...</Button>
                            <Button>Building on L1</Button>
                            <Button>Decentralized systems</Button>
                        </div>
                        <div className="flex items-center gap-60 marquee-left">
                            <Button>Easy to track</Button>
                            <Button>SaaS delivered</Button>
                            <Button>e-commerce web</Button>
                            <Button>Tokenization</Button>
                            <Button>MVP Shipped</Button>
                            <Button>e-commerce web</Button>
                            <Button>API integrating...</Button>
                            <Button>Building on L1</Button>
                            <Button>Decentralized systems</Button>
                        </div>
                    </div>
                </div>
                <Image src="/ruler-left.svg" alt="ruler" height={50} width={50} className="absolute top-0 left-8 opacity-50" />
                <Image src="/ruler-right.svg" alt="ruler" height={50} width={50} className="absolute top-0 right-8 opacity-50" />
            </section>
        </>
    )
}

export const MarqueeRow = ({
    children,
    direction = "left",
}: {
    children: React.ReactNode;
    direction?: "left" | "right";
}) => {
    return (
        <div className="overflow-hidden">
            <div
                className={`marquee ${direction === "left" ? "marquee-left" : "marquee-right"
                    }`}
            >
                <div className="marquee-track">
                    {children}
                    {children}
                </div>
            </div>
        </div>
    );
}
