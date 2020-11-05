import styled from 'styled-components';
import { COLOR_BLUE } from './atoms/tokens';

export const INPUT_STYLES = `
    display: block;
    height: 30px;
    width: 100%;
    text-align: center;
    background-color: white;
    
    &:focus {
        position: relative;
        z-index: 2;
        box-shadow: 0 0 0 1px ${COLOR_BLUE};
    }
`;

const Input = styled.input`
    ${INPUT_STYLES};
    padding: 0 8px;
    text-align: left;
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    width: 100%;

    &:focus {
        border: 1px solid ${COLOR_BLUE};
    }
`;

export default Input;
