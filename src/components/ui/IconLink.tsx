import * as React from 'react';
import styled from 'styled-components';
import { iconButtonStyles } from './IconButton';
import Icon from './Icon';
import { ICON_MAP } from './atoms/tokens';

const StyledIconLink = styled.a`
    ${iconButtonStyles}
`;

const IconLink = ({ iconName, ...otherProps }) => (
    <StyledIconLink
        target="_blank"
        title={ICON_MAP[iconName].label}
        {...otherProps}
    >
        <Icon name={iconName} />
    </StyledIconLink>
);

export default IconLink;
