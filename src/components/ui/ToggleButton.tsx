import styled from 'styled-components';
import {
    COLOR_BLUE,
    COLOR_BORDER,
    COLOR_HOVER_BG,
    COLOR_TEXT_LIGHT,
    TOGGLE_BUTTON_HEIGHT,
} from './atoms/tokens';

export const ToggleButton = styled.button(
    ({ isActive = false }) => `
        align-items: center;
        color: ${isActive ? COLOR_BLUE : COLOR_TEXT_LIGHT};
        cursor: pointer;
        display: flex;
        font-weight: 900;
        height: ${TOGGLE_BUTTON_HEIGHT}px;
        justify-content: center;
        width: ${TOGGLE_BUTTON_HEIGHT}px;
        
        &:focus,
        &:hover {
            background-color: ${COLOR_HOVER_BG};
        }
        &:active {
            background-color: ${COLOR_BORDER};
        }
    `,
);
