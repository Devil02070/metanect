import localeFont from 'next/font/local'
export const SpaceGrotesk = localeFont({
    variable: "--font-space-grotesk",
    src: [
        {
            path: './fonts/SpaceGrotesk-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/SpaceGrotesk-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/SpaceGrotesk-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/SpaceGrotesk-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/SpaceGrotesk-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
})
