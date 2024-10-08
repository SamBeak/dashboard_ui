import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const fonts = {
    body: "Pretendard, Roboto",
    heading: "Pretendard, Roboto",
    mono: "Pretendard, Roboto",
};

const theme = extendTheme({ config, fonts });

export default theme;
