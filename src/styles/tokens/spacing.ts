
type SpacingSizes = "small"|"medium"|"big"

type SpacingSize = {
    [key in SpacingSizes]:string;
}


export interface SpacingOptions {
    gaps:SpacingSize
    margins:SpacingSize
    paddings:SpacingSize
}

const Spacing:SpacingOptions = {
    gaps:{
        small:"0.8rem",
        medium:"1.6rem",
        big:"3.2rem",
    },
    margins:{
        small:"3.2rem",
        medium:"6.4rem",
        big:"8rem",
    },
    paddings:{
        small:"1.2rem",
        medium:"1.6rem",
        big:"4.8rem",
    },
}

export default Spacing