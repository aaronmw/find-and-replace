import styled from 'styled-components';
import { COLOR_BLUE } from './atoms/tokens';
import { INPUT_STYLES } from './Input';

export const Button = styled.button`
    ${INPUT_STYLES};
    background: ${COLOR_BLUE};
    color: white;
    border: 2px solid transparent;
    line-height: 0;
    cursor: pointer;

    &:active {
        background: #1170ae;
    }
    &:focus {
        border: 2px solid #1170ae;
    }
`;
