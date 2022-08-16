import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import {scheme} from "./scheme";
import { Button, IconButton, Heading} from "./baseStyles"

function config(mode: Mode): ThemeConfig {
    return {
      initialColorMode: mode,
      useSystemColorMode: false
    }
}

export const theme = (mode: Mode) =>  (extendTheme({
        config: {
            ...config(mode)
        },
        styles: {
            body:{
                fontFamily: "Readex Pro !important",
                backgroundColor: "brand.bgColor !important",
            },
            global:{
                "*" : {
                    fontFamily: "Readex Pro !important",
                    color: "brand.typography"
                }
            }
        },
        breakpoints: {
            xs: "480px",
            sm: "600px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
            "2xl": "1536px",
        },
        colors: {
            brand:{
                ...scheme[mode]
            }
        },
        components: {
            Button,
            IconButton,
            Heading
        }

    })

)