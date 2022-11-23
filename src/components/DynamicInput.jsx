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

    input {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        height: 100%;
        padding: 0 .8rem 0 .8rem;

        color: ${props => props.mode === 'light' ? DEFAULT_TEXT_LIGHT : DEFAULT_TEXT_DARK};
        
        background: ${props => props.mode === 'light' ? DEFAULT_LIGHT_MODE : DEFAULT_DARK_MODE};
        font-size: 12px;
        font-weight: 700;
        border: 2px solid ${props => props.mode === 'light' ? DEFAULT_BORDER_LIGHT : DEFAULT_BORDER_DARK};
        border-radius: 8px;
    }
    
    input:focus ~ label, input:valid ~ label{
        font-size: 10px;
        top: 23%;
        color: ${props => props.mode === 'light' ? DEFAULT_ACTIVE_LIGHT : DEFAULT_ACTIVE_DARK};
    }
`

const DynamicInput = (
    {
        mode, value = null, width, height,
        onChange, placeholder,
        type, name, disabled = false,
        size, maxlength, min,
        max, multiple = false, pattern,
        step, autofocus = false,
        list, autocomplete
    }
) => (
    <Field mode={mode} width={width} height={height} value={value}>
        <input
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            size={size}
            maxlength={maxlength}
            min={min}
            max={max}
            multiple={multiple}
            pattern={pattern}
            step={step}
            autofocus={autofocus}
            list={list}
            autocomplete={autocomplete ? 'on' : 'off'}
            required
        />
        <label>{placeholder}</label>
    </Field>
)

export default DynamicInput;

