import * as React from 'react';
import { ICON_COLOR, ICON_MAP, ICON_SIZE } from './atoms/tokens';

const Icon = ({ color = ICON_COLOR, className = '', name }) => (
    <svg
        className={className}
        width={ICON_SIZE}
        height={ICON_SIZE}
        viewBox={`0 0 ${ICON_MAP[name].viewBoxWidth || 512} 512`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, flexGrow: 0 }}
    >
        <path fill={color} d={ICON_MAP[name].data} />
    </svg>
);

export default Icon;
