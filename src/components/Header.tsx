import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${colors.white};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      {/* <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input type="checkbox" onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} checked={theme === 'dark'} /> Dark mode
          </label>
        )}
      </ThemeToggler> */}
    </HeaderInner>
  </StyledHeader>
)

export default Header
