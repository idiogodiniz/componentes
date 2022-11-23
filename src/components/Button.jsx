import styled from "styled-components"

const DEFAULT_WIDTH = 'auto'
const DEFAULT_HEIGHT = '42px'
const DEFAULT_PADDING = '0 .8rem 0 .8rem'
const DEFAULT_BACKGROUND = '#B89B19'

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${props => props.background ? props.background : DEFAULT_BACKGROUND};

    color: ${props => props.color ? props.color : '#FFFFFF'};

    width: ${props => props.width ? props.width : DEFAULT_WIDTH};
    height: ${props => props.height ? props.height : DEFAULT_HEIGHT};
    padding: ${props => props.padding ? props.padding : DEFAULT_PADDING};
    
    font-size: 12px;
    font-weight: 700;
    border-radius: 8px;
`

export default Button