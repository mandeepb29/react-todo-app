import React from 'react'
import styled from 'styled-components';


const LogoWrapper = styled.div`
padding: 1rem;
color: var(--color-white);
font-size: 2rem;
font-weight: 700;
line-height: 1;
`;
export const Logo = () => {
  return (
    <LogoWrapper>Productivity</LogoWrapper>
  )
}

