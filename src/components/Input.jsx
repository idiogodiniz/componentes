import styled from "styled-components"

const DEFAULT_WIDTH = 'auto'
const DEFAULT_HEIGHT = '52px'
const DEFAULT_PADDING = '0 .8rem 0 .8rem'

const DEFAULT_DARK_MODE = '#303030'
const DEFAULT_LIGHT_MODE = '#FFFFFF'

const DEFAULT_TEXT_LIGHT = '#444242'
const DEFAULT_TEXT_DARK = '#FFFFFF'

const DEFAULT_BORDER_LIGHT = '#828282'
const DEFAULT_BORDER_DARK = '#464646'

const DEFAULT_PLACEHOLDER_DARK = '#BBBBBB'
const DEFAULT_PLACEHOLDER_LIGHT = '#828282'

const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${props => props.mode === 'light' ? DEFAULT_TEXT_LIGHT : DEFAULT_TEXT_DARK};

    width: ${props => props.width ? props.width : DEFAULT_WIDTH};
    height: ${props => props.height ? props.height : DEFAULT_HEIGHT};
    padding: ${props => props.padding ? props.padding : DEFAULT_PADDING};
    
    background: ${props => props.mode === 'light' ? DEFAULT_LIGHT_MODE : DEFAULT_DARK_MODE};
    font-size: 12px;
    font-weight: 700;
    border: 2px solid ${props => props.mode === 'light' ? DEFAULT_BORDER_LIGHT : DEFAULT_BORDER_DARK};
    border-radius: 8px;

    ::placeholder {
        color: ${props => props.mode === 'light' ? DEFAULT_PLACEHOLDER_LIGHT : DEFAULT_PLACEHOLDER_DARK};
        font-weight: 700;
        font-size: 12px;
    }
`

export default Input;

