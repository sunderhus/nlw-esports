import { Typography } from "@/styles/tokens";
import Spacing from "@/styles/tokens/spacing";
import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    margin-top:${Spacing.margins.big};
    margin-bottom:${Spacing.margins.big};
    gap:${Spacing.margins.small};
`

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Title = styled.h1`
    font-size: ${Typography.headers.big};
    font-weight:  ${Typography.weights.heavy};
    color:${({theme})=> theme.palette.primmary[50].color};
    margin-top:${Spacing.margins.big};
`
export const GamerText = styled.span`
    --GamerTextColorStart : ${({ theme }) => theme.palette.colors.purlple[500]}; 
    --GamerTextColorCenter : ${({ theme }) => theme.palette.colors.green[500]};
    --GamerTextColorEnd : ${({ theme }) => theme.palette.colors.yellow[500]};
    background-image: linear-gradient(
        to right,
        var(--GamerTextColorStart),
        var(--GamerTextColorCenter),
        var(--GamerTextColorEnd)
    );
    background-size: 100%;
    background-clip:text;
    color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`