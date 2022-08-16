interface IScheme{
    bgColor: string;
    cardBorderColor: string;
    available: string;
    unavailable: string;
    typography: string;
}

interface IColorSchemeModes{
    light: IScheme;
    dark: IScheme;
}

interface IWrapper {
    children: JSX.Element
}

interface IASA{
    name: string;
    available: boolean;
    logo: string;
}

type Mode = "light" | "dark";