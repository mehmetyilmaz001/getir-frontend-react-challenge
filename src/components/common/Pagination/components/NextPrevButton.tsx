import { FunctionComponent } from "react";
import theme from "../../../../style/Theme";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { StyledButton } from "./StyledComponent";

interface INextPrevButton {
    disabled: boolean;
    direction: "left" | "right";
  }
  
  const NextPrevButton: FunctionComponent<INextPrevButton> = ({
    disabled,
    direction,
  }) => {
    const color = disabled ? theme.palette.disabled : theme.palette.primary.main;
    return (
      <StyledButton color={color}>
        {direction === "left" ? (
          <>
            <LeftArrow fill={color} /> Prev
          </>
        ) : (
          <>
            {" "}
            Next <RightArrow fill={color} />
          </>
        )}
      </StyledButton>
    );
  };
  
  export default NextPrevButton;