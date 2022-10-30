
type ShapeSizes = "small"|"medium"|"big"

type SpacingSize = {
    [key in ShapeSizes]:string;
}


export interface SpacingOptions {
    rounded:SpacingSize
}

const Shape:SpacingOptions = {
    rounded:{
        small:'0.4rem',
        medium:'0.8rem',
        big:'1.2rem'
    },
}

export default Shape