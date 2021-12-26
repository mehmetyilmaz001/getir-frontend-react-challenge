import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../../style/Theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

    /**
     * The string value of the input
     */  
    label?: string;
}


const StyledInput = styled.input<InputProps>`
    ${theme.input.main};
    width: 100%;
    padding: 12px 16px;
    outline: none;
    transition: border-color 0.2s ease-in-out;

    ::placeholder {
        color: ${theme.palette.text.placeholder};
    }

    :focus {
        border-color: ${theme.palette.primary.main};
    }
`
 
const Input: FunctionComponent<InputProps> = (props) => {
    return (  

        <StyledInput {...props} area-label={props.label} />
    );
}
 
export default Input;