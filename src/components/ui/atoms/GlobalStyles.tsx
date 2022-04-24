import { createGlobalStyle } from 'styled-components';
import { COLOR_TEXT, FONT_WEIGHT_BOLD } from './tokens';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        background-color: inherit;
        border: none;
        font-size: inherit;
        font-family: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
    }
    :root {
        line-height: 1.1rem;
        font-family: Inter, sans-serif;
        font-size: 11px;
        letter-spacing: 0.5px;
        background: white;
        user-select: none;
        color: ${COLOR_TEXT};
        -webkit-font-smoothing: subpixel-antialiased;
    }
    strong {
        font-weight: ${FONT_WEIGHT_BOLD};
    }
    em {
        font-style: italic;
    }
    code {
        font-family: monospace;
        color: ${COLOR_TEXT};
    }
`;
