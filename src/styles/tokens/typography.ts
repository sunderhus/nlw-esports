
type TypographyScales = "small"|"medium"|"big"

type TypographySize = {
    [key in TypographyScales]:string;
}

export interface TypographyOptions {
    headers:TypographySize
    paragraphs:TypographySize
}

const Typography:TypographyOptions = {
    headers:{
        small:"18rem",
        medium:"24rem",
        big:"32rem",
    },
    paragraphs:{
        small:"10rem",
        medium:"12rem",
        big:"16rem",
    }
}

export default Typography