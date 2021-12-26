import * as React from 'react';
import Container from './components/Container';
import StyledRadioButton from './components/StyledRadioButton';

export interface RadioButtonProps {
    id: string;

    /**
     * The stirng value of the radio button value grouping
     */ 
    name: string;

    /**
     * The label of the radio button
     */ 
    label: string;

    /**
     * The function to be called when the radio button is selected
     */ 
    onChange: (value: string) => void;

    /**
     * The value of the radio button
     */ 
    value: string;

    /**
     * The direction of the radio button which can be either 'row' or 'column'
     */ 
    direction?: 'row' | 'column';

    /**
     * The checked state of the radio button
     */ 
    checked?: boolean;
}

 
const RadioButton: React.FunctionComponent<RadioButtonProps> = ({id, name, label, value, onChange, direction = 'row', checked}) => {
    return ( 
        <Container direction={direction}>
            <StyledRadioButton 
                type="radio" 
                id={id} 
                name={name} 
                value={value} 
                onChange={(event) => onChange(event!.target.value)}
                checked={checked}
            />
            <label htmlFor={id}>{label}</label>
        </Container>
     );
}
 
export default RadioButton;