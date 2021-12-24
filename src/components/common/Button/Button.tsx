import styled from "styled-components";
import theme from "../../../style/Theme";

const Button = styled.button`
    background-color: ${theme.palette.primary.main};
    color: white;
    border: none;
    height: 22px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 12px;

    :hover {
        background-color: ${theme.palette.secondary.main};
    }

    :active {
        background-color: ${theme.palette.secondary.light};
    }
`;

export default Button;