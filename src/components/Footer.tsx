import Image from "next/image";
import Link from "next/link";
import { H1, P16 } from "./typography";
import { SlSocialLinkedin } from "react-icons/sl";
import { RxDiscordLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
    const navItems = [
        { title: "Our Approach", url: "/#" },
        { title: "What We Ship", url: "/#" },
        { title: "Company", url: "/#" },
    ]
    return (
        <footer className="bg-primary pt-10">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <Image src="/logo.svg" alt="logo" height={50} width={142} />
                <nav className="flex items-center gap-7.5">
                    {
                        navItems.map((item, i) => {
                            return (
                                <Link key={i} href={`${item.url}`} className="h-12.5 flex items-center hover:bg-primary-light transition-all duration-300">
                                    <P16 className="py-3 px-6">{item.title}</P16>
                                </Link>
                            )
                        })
                    }
                </nav>
                <div className="flex items-center gap-6">
                    <SlSocialLinkedin size={24}/>
                    <RxDiscordLogo size={24}/>
                    <RiTwitterXLine size={24}/>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-9 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <P16>Terms and conditions</P16>
                    <P16>Privacy Policy</P16>
                    <P16>© 2026 Metanct pvt. ltd. All rights reserved.</P16>
                </div>
                <div className="flex items-center gap-4">
                    <P16>Contact</P16>
                    <P16>Metanact@gmail.xyz</P16>
                </div>
            </div>
            {/* <Image src="/footer-logo.png" alt="logo" height={175} width={875} className="mt-24 mx-auto"/> */}
            <H1 className="text-center font-semibold text-[180px] leading-45 mt-24 text-grad relative -bottom-13">METANECT</H1>
        </footer>
    )
}   