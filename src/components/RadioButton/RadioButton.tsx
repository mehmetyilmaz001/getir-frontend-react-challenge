import * as React from 'react';
import Container from './components/Container';
import StyledRadioButton from './components/StyledRadioButton';

export interface RadioButtonProps {
    id: string;
    name: string;
    label: string;
    onChange: (value: string) => void;
    value: string;
    direction?: 'row' | 'column';
}

 
const RadioButton: React.FunctionComponent<RadioButtonProps> = ({id, name, label, value, onChange, direction = 'row'}) => {
    return ( 
        <Container direction={direction}>
            <StyledRadioButton 
                type="radio" 
                id={id} 
                name={name} 
                value={value} 
                onChange={(event) => onChange(event!.target.value)}
            />
            <label htmlFor={id}>{label}</label>
        </Container>
     );
}
 
export default RadioButton;