import styled from "styled-components";
import theme from "../../../style/Theme";
import check from '../assets/check.svg';

const StyledRadioButton = styled.input.attrs(_props => ({
    type: 'radio'
}))`
    position: absolute;
    left: -9999px;

    :checked + label, :not(:checked) + label {
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        display: inline-block;
        ${theme.typography.label};
    }

    :checked + label:before, :not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
    }

    :checked + label:after, :not(:checked) + label:after {
        content: '';
        width: 16px;
        height: 16px;
        border: solid 2px ${theme.palette.primary.main};
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 100%;
        ${theme.transition1};
        background: url(${check}) no-repeat center;
    }

    :not(:checked) + label:after {
        opacity: 0;
        transform: scale(0);
    }

    :checked + label:after {
        opacity: 1;
        transform: scale(1);
    }
`;

export default StyledRadioButton;