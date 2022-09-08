import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../Logo/Logo';
import Container from '../../hoc/elements/Container';
import NavItems from '../NavItems/NavItems';
const FixedWrapper = styled.div`
position: fixed;
top:0;
left:0;
width:100%;
height:6rem;
background-color: var(--color-main);
z-index: 20;

@media ${props => props.theme.mediaQueries.smallest}{
    display: none;
}
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2rem;
height: 100%;
`;


export const Navbar = () => {
    return (
        <FixedWrapper>
            <Container>
                <Wrapper>
                    <Logo />
                    <NavItems></NavItems>
                </Wrapper>
            </Container>
        </FixedWrapper>
    )
}

export default Navbar;