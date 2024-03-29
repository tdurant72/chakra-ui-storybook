import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react'
const customTheme = extendTheme({
    colors: {
        primary: {
            "50": '#e3eef9',
            "100": '#b9d5f1',
            "200": '#8bbae8',
            "300": '#5c9ede',
            "400": '#3989d7',
            "500": '#1674d0',
            "600": '#136ccb',
            "700": '#1061c4',
            "800": '#0c57be',
            "900": '#0644b3',
            "A100": '#dde7ff',
            "A200": '#aac4ff',
            "A400": '#77a0ff',
            "A700": '#5e8fff',
        },
        secondary: {
            "50": '#f9e3e9',
            "100": '#f1b9c8',
            "200": '#e88aa4',
            "300": '#df5b7f',
            "400": '#d83763',
            "500": '#d11448',
            "600": '#cc1241',
            "700": '#c60e38',
            "800": '#c00b30',
            "900": '#b50621',
            "A100": '#ffdfe2',
            "A200": '#ffacb5',
            "A400": '#ff7988',
            "A700": '#ff5f71',
        },
        transparent: 'transparent',
        lightGray: {
            100: '#eff3fa',
        },
        blue: {
            100: '#0098ae',
        },
        red: {
            100: '#ff3d3d',
            200: '#f77070'
        },
    },
    fonts: {
        ...chakraTheme.fonts,
        body: 'Graphik',
        heading: 'Graphik',
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
});

export default customTheme;