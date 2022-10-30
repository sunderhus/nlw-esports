import { Colors, Typography, Spacing } from '@/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-flow:column;  
  gap:${Spacing.gaps.small};
  
  
  label{
    font-size: ${Typography.paragraphs.big};
    color: ${Colors.white};
  }

  input{
    border:none;
    width:100%;
    color: ${Colors.white};
    background:${Colors.zinc[900]};
    padding:${Spacing.paddings.small} ${Spacing.paddings.medium};
    font-size:${Typography.paragraphs.big};

    &::placeholder{
        color:${Colors.zinc[500]}
    }
  }
`;
