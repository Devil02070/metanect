import Matrix from "../Matrix";
import { H1 } from "../typography";
import { Button } from "../ui/button";

export default function Banner() {
    return (
        <section className="flex items-center h-screen">
            <div className="w-full max-w-7xl mx-auto">
                <div className="max-w-200">
                <H1 data-speed="0.8">We don&apos;t chase the future.</H1>
                <H1 data-speed="0.8" className="mt-5">We build ahead of it.</H1>
                <Button data-speed="0.8" className="mt-8">Start a conversation</Button>
                </div>
            </div>
            <div className="ms-auto overflow-hidden rounded-bl-[160px] absolute top-0 right-0">
                <Matrix
                    fontSize={14}
                    speed={30}
                    changeSpeed={200}
                />
            </div>
        </section>
    )
}