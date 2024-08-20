import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import GrayCode from './gray-code'
import IconButton from '../iconbutton'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Notification from '../notification'
import Tab from '../tab'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { stackoverflowlight,githubgist } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Wrapper = styled.div`
 background-color: #f5f5f5;
    border: 1px solid #ccc;
   
    padding: 9.5px;
    overflow-x: scroll;
    max-width: 100%;
    margin: 0 0 10px;
    box-sizing: inherit;
`
const Text = styled.pre`
    display: block;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all; 
    font-family: monospace,monospace;
    white-space: pre;    
    font-weight: 400;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-stretch: normal;
    font: 87.5%/1.6 'Open Sans','Helvetica',sans-serif;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
`

const CodeBox = ({ children,
    showCopy,
    copyText,
    tabs,
    onTabSelected,
    language = "javascript" }) => {

    const [showCopied, setShowCopied] = useState(false)
    const [tabSelectedIndex, setTabSelectedIndex] = useState(0)
    const [textToCopy, setTextToCopy] = useState(copyText)
    const [text, setText] = useState(children)


    useEffect(() => {
        setTextToCopy(copyText)
    }, [copyText])

    useEffect(() => {
        if (!tabs) {
            setText(children)
        }
    }, [children])

    useEffect(() => {
        if (tabs) {
            const tab = tabs[tabSelectedIndex]
            setTextToCopy(tab.copyText !== 'undefined' ? tab.copyText : copyText)
            setText(tab.text !== 'undefined' ? tab.code : children)
        }

        onTabSelected && onTabSelected(tabSelectedIndex)
    }, [tabSelectedIndex])

    return (
        <div>
            {tabs &&

                < div className='flex w-full border border-gray-300 rounded-t-md'>
                    {tabs.map(({ title }, index) => (
                        <Tab
                            key={index}
                            id={index}
                            variant='underline'
                            onClick={() => {
                                setTabSelectedIndex(index)
                            }}
                            isSelected={index === tabSelectedIndex}
                        >{title}</Tab>
                    ))}
                </div>

            }

            <div className='relative'>

                <Wrapper
                    className={`relative z-0 ${tabs ? 'rounded-b-md' : 'rounded-md'}`}>
                    <SyntaxHighlighter language={language} style={stackoverflowlight}>
                        {text}
                    </SyntaxHighlighter>
                </Wrapper>
                <Notification
                    showDismiss={false}
                    timeoutMillis={2500}
                    isShown={showCopied}
                    title='copied!'
                    className='z-20'
                    onCloseComplete={() => setShowCopied(false)}
                    top
                    right
                    fixed={false}
                />

                {
                    //todo remove the false when the comma issue gets fixed
                    showCopy &&
                    <div className='absolute top-0 right-0 z-10'>
                        <CopyToClipboard
                            onCopy={() => setShowCopied(true)}
                            text={textToCopy ? textToCopy : text}>

                            <IconButton
                                round={false}
                                size
                                className='m-2 w-8 h-8 flex items-center justify-center'
                                src={<ClipboardDocumentCheckIcon className='w-6 h-6' />}
                            />
                        </CopyToClipboard>
                    </div>
                }
            </div >
        </div>
    );
};

CodeBox.defaultProps = {
    showCopy: true,
    script: false
};

// CodeBox.propTypes = {
//     script: PropTypes.bool,
//     copyText: PropTypes.string,
//     tabs: PropTypes.arrayOf(PropTypes.shape({
//         title: PropTypes.string,
//         code: PropTypes.object,
//         script: PropTypes.bool,
//         copyText: PropTypes.string,
//     }))
// };

export default CodeBox;