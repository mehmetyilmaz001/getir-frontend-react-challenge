import { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import theme from "../../style/Theme";

import logo from "../../assets/market-logo.svg";
import BasketTotal from "../../components/BasketCard/components/BasketTotal";
import { mq } from "../../style/Mixins";
import React from "react";
import BasketCard from "../../components/BasketCard/BasketCard";
import { useSelector } from "react-redux";
import { Store } from "../../redux";
import { ReactComponent as FilterIcon } from "../../assets/filter-icon.svg";
import useOnClickOutside from "../../hooks/useOnlickOutside";
import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import Filters from "../../pages/ProductList/components/Filters";

interface HeaderProps {}

const StyledHeader = styled.header`
  display: flex;
  // flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.primary.main};
  height: 76.64px;
`;

const HeaderInnerContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: ${theme.desktop.containerSize};
  position: relative;

  ${mq("mobile")} {
    width: ${theme.mobile.containerSize};

    .logo{
        height: 30px;
    }
  }


`;

const BasketContainer = styled.div`
  position: absolute;
  width: 129px;
  height: 100%;
  right: 0;

  ${mq("mobile")}, ${mq("tablet")} {
    width: 80px;
    cursor: pointer;
  }
  ${mq("tablet")} {
    cursor: pointer;
  }
`;

const FilterButton = styled(Button)`
  position: absolute;
  left: 5px;
`;

const topOffsetForModals = "80px";

const BasketCardModal = styled(Modal)`
  background-color: red;
  top: 80px;
  right: 5px;
`;

const FilterCardModal = styled(Modal)`
  top: ${topOffsetForModals};
  left: 5px;
`;

/**
 * A component that renders the header of the application
 */
const Header: FunctionComponent<HeaderProps> = () => {
  const [basketVisibility, setBasketVisibility] =
    React.useState<boolean>(false);
  const [filterVisibility, setFilterVisibility] =
    React.useState<boolean>(false);
  const { isTabletOrMobile } = useSelector((s: Store) => s.root);

  const basketContainerRef = useRef<HTMLDivElement>(null);

  const _toggleBasketVisibility = () => {
    if (isTabletOrMobile) {
      setBasketVisibility(!basketVisibility);
    }

    return;
  };
  const _toggleFilterVisibility = () => {
    if (isTabletOrMobile) {
      setFilterVisibility(!filterVisibility);
    }

    return;
  };

  useOnClickOutside(basketContainerRef, () => setBasketVisibility(false));
  useOnClickOutside(basketContainerRef, () => setFilterVisibility(false));

  return (
    <>
      <StyledHeader ref={basketContainerRef}>
        {isTabletOrMobile && (
          <>
            {basketVisibility && (
              <BasketCardModal onClose={() => setBasketVisibility(false)}>
                <BasketCard />
              </BasketCardModal>
            )}

            {filterVisibility &&
                <FilterCardModal onClose={() => setFilterVisibility(false)}>
                    <Filters />
                </FilterCardModal>
            }
          </>
        )}

       
        <HeaderInnerContainer>
          {isTabletOrMobile && (
            <FilterButton customType="transparent" onClick={_toggleFilterVisibility}>
              <FilterIcon />
            </FilterButton>
          )}
          <img src={logo} alt="Market" className="logo"/>
          <BasketContainer onClick={_toggleBasketVisibility}>
            <BasketTotal theme="dark" showBasketIcon={true} />
          </BasketContainer>
        </HeaderInnerContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
