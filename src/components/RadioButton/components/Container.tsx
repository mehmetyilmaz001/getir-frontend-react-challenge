import styled from "styled-components";
import theme from "../../../style/Theme";
import { RadioButtonProps } from "../RadioButton";

const Container = styled.div<{
    direction: RadioButtonProps["direction"];
}>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    margin-bottom: ${theme.formItemSpace};

    :last-child {
        margin-bottom: 0;
    }
`;


export default Container;