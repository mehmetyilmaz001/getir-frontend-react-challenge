import styled from "styled-components";
import theme from "../../../style/Theme";

const Button = styled.button<{
    customType: "primary" | "secondary" | "transparent";
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({customType}) => theme.palette[customType]["main"]};
    color: ${({customType}) => theme.palette[customType]["text"]};
    border: none;
    height: 32px;
    min-width: ${({customType}) => customType as string === "transparent" ? "30px" : "62px"};
    border-radius: 2px;
    cursor: pointer;
    font-size: 12px;

    :hover {
        background-color: ${({customType}) => theme.palette[customType]["hover"]};
        color: ${({customType}) => theme.palette[customType]["activeTextColor"]};
    }

    :active {
        background-color: ${({customType}) => theme.palette[customType]["active"]};
        color: ${({customType}) => theme.palette[customType]["activeTextColor"]};
    }
`;

export default Button;