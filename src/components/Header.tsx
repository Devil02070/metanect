import Image from "next/image";
import { P16 } from "./typography";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
    const navItems = [
        { title: "Our Approach", url: "/#" },
        { title: "What We Ship", url: "/#" },
        { title: "Company", url: "/#" },
    ]
    return (
        <header className="flex items-center justify-center z-90 p-4 w-full fixed top-0">
            <div className="p-3 w-full max-w-4xl mx-auto bg-gray-900">
                <div className="flex items-center gap-4 justify-between">
                    <Image src="/logo.svg" alt="logo" height={50} width={142} />
                    <nav className="flex items-center gap-7.5">
                        {
                            navItems.map((item, i) => {
                                return (
                                    <Link key={i} href={`${item.url}`} className="h-12.5 flex items-center hover:bg-gray-800 transition-all duration-300">
                                        <P16 className="py-3 px-6">{item.title}</P16>
                                    </Link>
                                )
                            })
                        }
                    </nav>
                    <Button>Contact Us</Button>
                </div>

            </div>
        </header>
    )
}