import * as React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { COLOR_BLUE, COLOR_HOVER_BG, ICON_MAP } from './atoms/tokens';

export const iconButtonStyles = `
    width: 30px;
    height: 30px;
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        background-color: ${COLOR_HOVER_BG};
    }
    &:focus {
        border: 2px solid ${COLOR_BLUE};
    }
`;

const StyledIconButton = styled.button`
    ${iconButtonStyles}
`;
const IconButton = styled(
    ({ iconName, title = null, onClick = () => null, ...otherProps }) => {
        return (
            <StyledIconButton
                title={ICON_MAP[iconName].label}
                onClick={evt => {
                    evt.preventDefault();
                    onClick(evt);
                }}
                {...otherProps}
            >
                <Icon name={iconName} />
            </StyledIconButton>
        );
    },
)``;

export default IconButton;
