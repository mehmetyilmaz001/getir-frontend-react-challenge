import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../../style/Theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}


const StyledInput = styled.input<InputProps>`
    border: 2px solid ${theme.palette.border.main};
    height: 48px;
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

        <StyledInput {...props} />
    );
}
 
export default Input;