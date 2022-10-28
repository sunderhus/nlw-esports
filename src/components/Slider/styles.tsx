import Spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

export const Container = styled.div`
    display:flex;
`;

export const CardGallery = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:${Spacing.margins.small};
    margin-top:${Spacing.margins.big};
`;

export const Card = styled.a`
    position: relative;
    width:18rem;
    height:24rem;
    color:${({ theme }) => theme.palette.primmary[50].color};
    overflow:hidden;
    border-radius:0.8rem;
    
    &:hover{
        .card__image{
            transform:scale(1.1);
            transform-origin:center;
        }
    }

    .card__image{
        transition: transform 0.3s linear;
    }
   
    .card__info{
        position:absolute;
        display: flex;
        flex-wrap:wrap;
        flex-direction: column;
        justify-content: flex-end;
        align-items:flex-start;
        gap:${Spacing.paddings.small};
        bottom:0;
        left:0;
        right:0;
        height:50%;
        padding: ${Spacing.paddings.medium};
        background:linear-gradient(to bottom, rgba(0,0,0,0.0) 0%,rgba(0,0,0,0.9) 105%);

        strong{
        }
    }
`;