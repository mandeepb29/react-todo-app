import React from 'react'
import styled from 'styled-components'
const HamburgerWrapper = styled.div`
position: relative;
height: 3rem;
  width: 4rem;
  z-index: 50;
`
const HamburgerIcon = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: var(--color-white);
}

 & .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.2s ease-in-out;
}

 & .line2 {
  transition: transform 0.1s ease-in-out;
}

 & .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.2s ease-in-out;
}`

const HamburgerCheckBox = styled.input`
position: absolute;
display: block;
height: 100%;
width: 100%;
z-index: 5;
opacity: 0;
cursor: pointer;

&:checked ~ div .line1 {
  transform: rotate(45deg);
}

&:checked ~ div .line2 {
  transform: translateX(-50%) scaleY(0);
}

&:checked ~ div .line3 {
  transform: rotate(-45deg);
}
`

const Hamburger = ({toggleMenu,isOpened}) => {
  return (
    <HamburgerWrapper>
    <HamburgerCheckBox type="checkbox" onChange={toggleMenu} checked={isOpened} />
    <HamburgerIcon className="hamburger-lines">
    <span className="line line1"></span>
    <span className="line line2"></span>
    <span className="line line3"></span>
    </HamburgerIcon>  
    </HamburgerWrapper>
  )
}

export default Hamburger