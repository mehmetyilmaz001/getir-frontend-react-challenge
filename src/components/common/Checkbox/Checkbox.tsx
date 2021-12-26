import React from "react";
import styled from "styled-components";
import theme from "../../../style/Theme";
import StyledCheckBox from "./components/StyledCheckbox";

interface CheckboxProps {
  id: string;
  /**
   * The label of the checkbox
   */ 
  label: string;

  /**
   * The function to be called when the checkbox is selected
   */ 
  onChange: (value: string) => void;
  
  /**
   * The value of the checkbox
   */ 
  value: string;

  /**
   * The direction of the checkbox which can be either 'row' or 'column'
   */ 
  direction?: "row" | "column";

  /**
   * The checked state of the checkbox
   */ 
  checked?: boolean;
}

const Container = styled.div<{
  direction: CheckboxProps["direction"];
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  margin-bottom: ${theme.formItemSpace};

  :last-child {
    margin-bottom: 0;
  }
`;


const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  id,
  label,
  onChange,
  value,
  direction,
  checked,
}) => {  

  return (
    <Container direction={direction}>
      <StyledCheckBox
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        checked={checked}
        aria-label={label}
        aria-labelledby={id}
        aria-checked={checked}
      />

      {/* <input type={"checkbox"} id={id} value={value} onChange={(e) => onChange(e.target.value)} checked={checked} /> */}
      <label htmlFor={id}> {label}</label>
    </Container>
  );
};

export default Checkbox;
