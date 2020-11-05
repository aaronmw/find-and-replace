import * as React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
    & + & {
        margin-top: 8px;
    }
`;
