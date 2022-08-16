export const scheme : IColorSchemeModes = {
   light: generateScheme( "#F2FBF6", "#B7BECC", "black" ),
   dark: generateScheme( "#292929", "#B7BECC", "#dfdfdf" )
}

function generateScheme(bgColor: string, cardBorderColor: string, typography: string ){
    return {
        bgColor,
        cardBorderColor,
        typography,
        available: "#6FD791",
        unavailable: "#BC3131"
    } as IScheme
}