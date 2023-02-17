import cx from 'classnames'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import LayoutMarginalContainer from '~components/Layout/MarginalContainer'
import useWindowScrollDirection from '~hooks/useWindowScrollDirection'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  height: 3.5rem;

  background-color: white;
  border-bottom: 1px solid #eee;
  transition: top 0.4s ease;
  @media (max-width: 500px) {
    &.hide {
      top: -3.5rem;
    }
  }
`

const StyledTitle = styled(Link)`
  display: flex;

  color: hotpink;

  font-size: 1.8rem;
  font-family: Monoton, sans-serif;
  
`

const Header = () => {
    const { isUp } = useWindowScrollDirection()
    return (
      <StyledHeader className={cx({ 'hide': !isUp })}>
        <LayoutMarginalContainer>
          <StyledTitle to='/'>spriteye</StyledTitle>
        </LayoutMarginalContainer>
      </StyledHeader>
    )
  }

export default Header