import { Colors, Shape, Typography } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
    display:flex;  
    justify-content:space-between;
    align-items:center;
    padding:2.4rem 3.2rem;
    background-color:${({ theme }) => theme.palette.backgroundColor.color};
    width:100%;
    position:relative;
    overflow:hidden;
    border-radius:${Shape.rounded.medium};

    --GamerTextColorStart : ${({ theme }) => theme.palette.colors.purlple[500]}; 
    --GamerTextColorCenter : ${({ theme }) => theme.palette.colors.green[500]};
    --GamerTextColorEnd : ${({ theme }) => theme.palette.colors.yellow[500]};
    &:after{
        content:'';
        position:absolute;
        width:100%;
        height:0.4rem;
        top:0;
        left:0;
        right:0;
        background-image: linear-gradient(
        to right,
        var(--GamerTextColorStart),
        var(--GamerTextColorCenter),
        var(--GamerTextColorEnd)
    );
    }
`;

export const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    color:${Colors.zinc[400]};

    h3{
        font-size: ${Typography.headers.medium};
        color:${({ theme }) => theme.palette.backgroundColor.contrastColor};
    }
`;
