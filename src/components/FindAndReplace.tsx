import get from 'lodash/get';
import * as React from 'react';
import { FlexBox } from './ui/atoms/FlexBox';
import { Row } from './ui/atoms/Row';
import {
    COLOR_TEXT_LIGHT,
    TOGGLE_BUTTON_HEIGHT,
    WINDOW_HEIGHT,
} from './ui/atoms/tokens';
import { Button } from './ui/Button';
import Icon from './ui/Icon';
import Input from './ui/Input';
import { ToggleButton } from './ui/ToggleButton';
import { sendMessage } from './utils/helper-functions';

const FindAndReplace = ({ data, actions }) => {
    const { pluginState } = data;
    const { setPluginState } = actions;
    const [isCaseSensitive, setIsCaseSensitive] = React.useState(
        get(pluginState, 'isCaseSensitive', false),
    );
    const [isRegExp, setIsRegExp] = React.useState(
        get(pluginState, 'isRegExp', false),
    );
    const [needle, setNeedle] = React.useState(get(pluginState, 'needle', ''));
    const [replacement, setReplacement] = React.useState(
        get(pluginState, 'replacement', ''),
    );
    const needleInputRef = React.useRef(null);

    React.useEffect(() => {
        sendMessage({
            type: 'setWindowHeight',
            params: {
                height: WINDOW_HEIGHT,
            },
        });
    }, []);

    React.useEffect(() => {
        setPluginState({ isCaseSensitive, isRegExp, needle, replacement });
    }, [isCaseSensitive, isRegExp, needle, replacement]);

    React.useEffect(() => {
        if (needleInputRef.current) {
            needleInputRef.current.focus();
            needleInputRef.current.select();
        }
    }, [needleInputRef]);

    const handleClickReplaceAll = () => {
        sendMessage({
            type: 'findAndReplace',
            params: { isCaseSensitive, isRegExp, needle, replacement },
        });
    };

    const handleChangeNeedle = evt => setNeedle(evt.target.value);

    const handleChangeReplacement = evt => setReplacement(evt.target.value);

    const handleClickToggleIsRegExp = () => setIsRegExp(!isRegExp);

    const handleClickToggleIsCaseSensitive = () =>
        setIsCaseSensitive(!isCaseSensitive);

    const handleKeyDown = evt => {
        if (evt.key === 'Enter') {
            handleClickReplaceAll();
        }
        if (evt.key === 'Escape') {
            sendMessage({ type: 'close' });
        }
    };

    const handleSwapNeedleAndReplacement = () => {
        const prevNeedle = needle;
        setNeedle(replacement);
        setReplacement(prevNeedle);
    };

    return (
        <div
            style={{
                padding: '8px 15px',
            }}
        >
            <Row>
                <FlexBox>
                    <div style={{ width: '100%' }}>
                        <Row>
                            <FlexBox isFullWidth>
                                <div style={{ color: COLOR_TEXT_LIGHT }}>
                                    Find:
                                </div>
                                <FlexBox>
                                    <ToggleButton
                                        isActive={isCaseSensitive}
                                        title="Case Sensitive"
                                        onClick={
                                            handleClickToggleIsCaseSensitive
                                        }
                                    >
                                        Aa
                                    </ToggleButton>
                                    <ToggleButton
                                        isActive={isRegExp}
                                        title="Regular Expression"
                                        onClick={handleClickToggleIsRegExp}
                                    >
                                        <span
                                            style={{
                                                bottom: '1px',
                                                fontSize: '1.4rem',
                                                position: 'relative',
                                            }}
                                        >
                                            .
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '1.4rem',
                                                position: 'relative',
                                                top: '1px',
                                            }}
                                        >
                                            *
                                        </span>
                                    </ToggleButton>
                                </FlexBox>
                            </FlexBox>
                            <Input
                                ref={needleInputRef}
                                style={{
                                    fontFamily: isRegExp
                                        ? 'monospace'
                                        : undefined,
                                    fontSize: '1.2rem',
                                }}
                                tabIndex={0}
                                type="text"
                                value={needle}
                                onChange={handleChangeNeedle}
                                onKeyDown={handleKeyDown}
                            />
                        </Row>
                        <Row>
                            <FlexBox
                                style={{
                                    height: `${TOGGLE_BUTTON_HEIGHT}px`,
                                    color: COLOR_TEXT_LIGHT,
                                }}
                            >
                                Replace With:
                            </FlexBox>
                            <Input
                                style={{
                                    fontSize: '1.2rem',
                                }}
                                tabIndex={0}
                                type="text"
                                value={replacement}
                                onChange={handleChangeReplacement}
                                onKeyDown={handleKeyDown}
                            />
                            <div
                                style={{
                                    color: COLOR_TEXT_LIGHT,
                                    position: 'relative',
                                    top: '0.5rem',
                                    visibility: isRegExp ? 'visible' : 'hidden',
                                }}
                            >
                                <code>
                                    $<em>n</em>
                                </code>{' '}
                                refers the <em>n</em>
                                <sup style={{ fontSize: '0.7em' }}>th</sup>{' '}
                                bracketed submatch
                            </div>
                        </Row>
                    </div>
                    <ToggleButton
                        style={{
                            transform: `translateY(3px) rotate(90deg)`,
                        }}
                        tabIndex={0}
                        onClick={handleSwapNeedleAndReplacement}
                    >
                        <Icon name="exchange" />
                    </ToggleButton>
                </FlexBox>
            </Row>
            <Row style={{ marginTop: '15px' }}>
                <Button tabIndex={0} onClick={handleClickReplaceAll}>
                    Replace All
                </Button>
            </Row>
        </div>
    );
};

export default FindAndReplace;
