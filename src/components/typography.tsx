import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef, ElementType } from "react"

type TypographyElement = HTMLHeadingElement | HTMLParagraphElement | HTMLElement
type FontWeight = "regular" | "medium" | "semibold" | "bold"

type TypographyTag =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "button18"
    | "p"
    | "p24"
    | "p18"
    | "p16"
    | "p16medium"

interface TypographyProps extends HTMLAttributes<TypographyElement> {
    as?: TypographyTag
    weight?: FontWeight
}

const Typography = forwardRef<TypographyElement, TypographyProps>(
    ({ className, as = "p", children, ...props }, ref) => {
        const Component = (["h1", "h2",].includes(as) ? as : "p") as ElementType

        /**(16px = 1rem)*/
        const variants: Record<TypographyTag, string> = {
            h1: "text-[4.5rem] leading-[5rem] font-spaceGrotesk",          // 72px
            h2: "text-[3.5rem] md:text-[3.5rem] leading-[3.5rem] font-spaceGrotesk",          // 56px
            h3: "text-[3rem] md:text-[3rem] leading-[3rem] font-spaceGrotesk",          // 48px
            h4: "text-[1.75rem] leading-[1.75rem] font-spaceGrotesk",          // 28px

            button18: "text-lg leading-5 font-spaceGrotesk",  // 18px

            p: "text-[1rem] leading-[1rem] font-spaceGrotesk",  // 16px
            p24: "text-[1.5rem] leading-[2rem] font-spaceGrotesk",  // 24px
            p18: "text-lg leading-5 font-spaceGrotesk",  // 18px
            p16: "text-[1rem] leading-[1rem] font-spaceGrotesk",  // 16px
            p16medium: "text-[1rem] leading-[1rem] font-spaceGrotesk font-medium",  // 16px medium
        }

        return (
            <Component
                className={cn(variants[as], className)}
                ref={ref}
                {...props}
            >
                {children}
            </Component>
        )
    },
)

Typography.displayName = "Typography"

export { Typography }

// Prebuilt components:
export const H1 = (props: TypographyProps) => <Typography as="h1" {...props} />
export const H2 = (props: TypographyProps) => <Typography as="h2" {...props} />
export const H3 = (props: TypographyProps) => <Typography as="h3" {...props} />
export const H4 = (props: TypographyProps) => <Typography as="h4" {...props} />

export const Button18 = (props: TypographyProps) => <Typography as="button18" {...props} />

export const P = (props: TypographyProps) => <Typography as="p" {...props} />
export const P24 = (props: TypographyProps) => <Typography as="p24" {...props} />
export const P18 = (props: TypographyProps) => <Typography as="p18" {...props} />
export const P16 = (props: TypographyProps) => <Typography as="p16" {...props} />
export const P16Medium = (props: TypographyProps) => <Typography as="p16medium" {...props} />
