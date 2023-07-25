export interface ColorInfo {
    paletteTitle: string
    colors: ColorDescription[]
}

export interface ColorDescription {
    name: string
    hex: string
    rgb: Rgb
    hsl: Hsl
    lab: Lab
    luminance: number
    luminanceWCAG: number
    swatchImg: SwatchImg
    requestedHex: string
    distance: number
}

export interface Rgb {
    r: number
    g: number
    b: number
}

export interface Hsl {
    h: number
    s: number
    l: number
}

export interface Lab {
    l: number
    a: number
    b: number
}

export interface SwatchImg {
    svgNamed: string
    svg: string
}
