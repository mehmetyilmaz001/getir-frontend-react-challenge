import styled from "styled-components";
import theme from "../../../../style/Theme";
import check from '../../assets/check-white.svg';


const StyledCheckBox = styled.input.attrs((_props) => ({
    type: "checkbox",
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
      width: 22px;
      height: 22px;
      border: 1px solid #ddd;
      background: #fff;
      box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);

  }
  
  :checked + label:after, :not(:checked) + label:after {
      content: '';
      width: 22px;
      height: 22px;
      border: solid 2px ${theme.palette.primary.main};
      position: absolute;
      top: 0px;
      left: 0px;
      ${theme.transition1};
      background: ${theme.palette.primary.main} url(${check}) no-repeat center;
  }

  svg{
      fill-
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

  export default StyledCheckBox;