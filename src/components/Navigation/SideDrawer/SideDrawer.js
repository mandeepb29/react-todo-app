import React, { useState } from 'react'
import styled from 'styled-components'
import { Logo } from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Hamburger from './Hamburger/Hamburger';

const FixedWrapper = styled.div`
position: fixed;
top:0;
left:0;
width:100%;
height:6rem;
z-index: 20;
background-color: var(--color-main);
display: none;
@media ${props => props.theme.mediaQueries.smallest}{
    display: flex;
}
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
width:100%;
justify-content: space-between;
padding: 0 2rem;
height: 100%;
`;

const StyledMenu = styled.div`
width: 100%;
height: 100vh;
background-color: var(--color-mainDark);
position: fixed;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
top: 0;
right: 0;
transition: transform 0.2s eas;
padding:6rem 1rem 1rem;
transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);;
transform: ${props => props.isOpened ? 'translateY(0)': 'translateY(-100%)'};
display: none;
@media ${props => props.theme.mediaQueries.smallest}{
    display: flex;
}
`

export const SideDrawer = () => {
    const [menuIsOpened, toggleMenu] = useState(false)
    return (
        <>
        <FixedWrapper>
                <Wrapper>
                    <Logo />
                    <Hamburger isOpened={menuIsOpened} toggleMenu = {() => toggleMenu(!menuIsOpened)} />
                </Wrapper>
        </FixedWrapper>

        <StyledMenu isOpened={menuIsOpened}>
            <NavItems mobile closeMenu = {() => toggleMenu(false)}></NavItems>
        </StyledMenu>
        </>
    )
}

export default SideDrawer;