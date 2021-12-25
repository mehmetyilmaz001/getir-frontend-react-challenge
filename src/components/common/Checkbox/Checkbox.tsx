import React from "react";
import styled from "styled-components";
import theme from "../../../style/Theme";
import StyledCheckBox from "./components/StyledCheckbox";

interface CheckboxProps {
  id: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
  direction?: "row" | "column";
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



  // console.log("Checkbox => ", label , checked);
  

  return (
    <Container direction={direction}>
      <StyledCheckBox
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        checked={checked}
      />

      {/* <input type={"checkbox"} id={id} value={value} onChange={(e) => onChange(e.target.value)} checked={checked} /> */}
      <label htmlFor={id}> {label}</label>
    </Container>
  );
};

export default Checkbox;
