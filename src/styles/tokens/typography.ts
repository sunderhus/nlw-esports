
type TypographySizes = "small"|"medium"|"big"
type TypographyWeights = "light"|"normal"|"heavy"

type TypographySize = {
    [key in TypographySizes]:string;
}
type TypographyWeight = {
    [key in TypographyWeights]:string;
}

export interface TypographyOptions {
    headers:TypographySize
    paragraphs:TypographySize
    weights:TypographyWeight;
}

const Typography:TypographyOptions = {
    headers:{
        small:"1.8rem",
        medium:"2.4rem",
        big:"7.7rem",
    },
    paragraphs:{
        small:"1rem",
        medium:"1.2rem",
        big:"1.6rem",
    },
    weights:{
        light:'300',
        normal:'500',
        heavy:'900'
    }
}

export default Typography