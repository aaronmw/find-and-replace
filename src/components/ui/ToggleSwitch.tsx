import styled from 'styled-components';
import { COLOR_TEXT, COLOR_TEXT_LIGHT } from './atoms/tokens';

const TOGGLE_WIDTH = 25;
const TOGGLE_HEIGHT = 11;
const TOGGLE_BORDER_WIDTH = 1;

export const ToggleSwitch = styled.div(
    ({ isActive }) => `
        border: ${TOGGLE_BORDER_WIDTH}px solid
            ${isActive ? COLOR_TEXT : COLOR_TEXT_LIGHT};
        border-radius: 100px;
        width: ${TOGGLE_WIDTH}px;
        height: ${TOGGLE_HEIGHT}px;
        padding: ${TOGGLE_BORDER_WIDTH}px;
        display: flex;
        justify-content: ${isActive ? 'flex-end' : 'flex-start'};
        margin-left: 8px;
    
        &:before {
            content: '';
            display: block;
            width: ${TOGGLE_HEIGHT - TOGGLE_BORDER_WIDTH * 4}px;
            height: ${TOGGLE_HEIGHT - TOGGLE_BORDER_WIDTH * 4}px;
            border-radius: 100px;
            background-color: ${isActive ? COLOR_TEXT : COLOR_TEXT_LIGHT};
        }
    `,
);
