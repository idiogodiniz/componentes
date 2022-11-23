import styled from "styled-components"

const DEFAULT_WIDTH = 'auto'
const DEFAULT_HEIGHT = '52px'

const DEFAULT_DARK_MODE = '#303030'
const DEFAULT_LIGHT_MODE = '#FFFFFF'

const DEFAULT_TEXT_LIGHT = '#444242'
const DEFAULT_TEXT_DARK = '#FFFFFF'

const DEFAULT_BORDER_LIGHT = '#828282'
const DEFAULT_BORDER_DARK = '#464646'

const DEFAULT_PLACEHOLDER_DARK = '#BBBBBB'
const DEFAULT_PLACEHOLDER_LIGHT = '#828282'

const DEFAULT_ACTIVE_DARK = '#787878';
const DEFAULT_ACTIVE_LIGHT = '';

const Field = styled.div`
    position: relative;
    width: ${props => props.width ? props.width : DEFAULT_WIDTH};
    height: ${props => props.height ? props.height : DEFAULT_HEIGHT};

    label {
        position: absolute; 
        top: 50%;
        left: .9rem;
        transform: translateY(-50%);
        font-size: 12px;
        font-weight: 700;
        pointer-events: none;
        color: ${props => props.mode === 'light' ? DEFAULT_PLACEHOLDER_LIGHT : DEFAULT_PLACEHOLDER_DARK};
        font-weight: 700;
        font-size: 12px;
        transition: .25s ease-in-out;
    }

    select {
        display: flex;
        flex-direction: row;
        align-items: center;
        appearance: none;
        position: relative;
        

        width: 100%;
        height: 100%;
        padding: 0 .8rem 0 .8rem;

        color: ${props => props.mode === 'light' ? DEFAULT_TEXT_LIGHT : DEFAULT_TEXT_DARK};
        
        background: ${props => props.mode === 'light' ? DEFAULT_LIGHT_MODE : DEFAULT_DARK_MODE};
        font-size: 12px;
        font-weight: 700;
        border: 2px solid ${props => props.mode === 'light' ? DEFAULT_BORDER_LIGHT : DEFAULT_BORDER_DARK};
        border-radius: 8px;

        ::before {
            content: url('/icons/expand.svg');
            position: absolute;
            top: 0;
            right: 0;
            height: 40%;
            width: auto;
        }
    }
    
    select:focus ~ label, select:valid ~ label{
        font-size: 10px;
        top: 23%;
        color: ${props => props.mode === 'light' ? DEFAULT_ACTIVE_LIGHT : DEFAULT_ACTIVE_DARK};
    }
`

const PopoverSelect = (
    {
        children, onKeyPress, mode,
        value = null, width, height,
        onChange, placeholder, name
    }
) => (
    <Field mode={mode} width={width} height={height}>
        <select
            name={name}
            value={value}
            onKeyPress={onKeyPress}
            onChange={onChange}
            required
        >
            { children }
        </select>
        <label>{placeholder}</label>
    </Field>
)

export default PopoverSelect;