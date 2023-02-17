import React from 'react'
import styled from '@emotion/styled'

const StyledMain = styled.main`
  margin-bottom: 2.5rem;
`

const Main = ({ children }) => (
  <StyledMain>
    {children}
  </StyledMain>
)

export default Main