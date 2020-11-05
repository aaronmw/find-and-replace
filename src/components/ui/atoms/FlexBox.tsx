import styled from 'styled-components';

export const FlexBox = styled.div(
    ({
        align = 'center',
        isFullWidth = false,
        justify = 'space-between',
        spacing = '',
    }) => `
        align-items: ${align};
        display: flex;
        justify-content: ${justify};
        width: ${isFullWidth ? '100%' : 'auto'};
        
        > * + * {
            margin-left: ${spacing};
        }
    `,
);
