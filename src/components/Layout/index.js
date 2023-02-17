import React from 'react'

import LayoutFooter from '~components/Layout/Footer'
import LayoutHeader from '~components/Layout/Header'
import LayoutMain from '~components/Layout/Main'
import GlobalStyle from '~styles/GlobalStyle'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <LayoutHeader />
    <LayoutMain>
      {children}
    </LayoutMain>
    <LayoutFooter />
  </>
)

export default Layout