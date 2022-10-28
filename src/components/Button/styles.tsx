import { Colors, Shape, Spacing } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.button`
    cursor:pointer;
    justify-content:center;
    display:flex;
    align-items:center;
    gap:${Spacing.paddings.small};
    padding:${Spacing.paddings.small} ${Spacing.paddings.medium};
    border-radius:${Shape.rounded.small};
    background-color:${Colors.violet[500]};
    color:${Colors.white};
`;
