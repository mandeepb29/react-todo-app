import React from 'react';
import Navbar from "../../Navigation/Navbar/Navbar";
import styled from 'styled-components';
import Container from '../elements/Container';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';

const MainWrapper = styled.div`
width: 100%;
margin-top: 6rem;
min-height:calc(100vh - 6rem);
`;

const Layout = ({children}) => (
    <>
      <Navbar></Navbar>
      <SideDrawer /> 
    <MainWrapper>
      <Container>
      {children}
        </Container>
    </MainWrapper>
    </>
)


export default Layout;
