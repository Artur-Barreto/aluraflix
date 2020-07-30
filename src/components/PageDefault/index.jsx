import React, { Children } from 'react';

// import { Container } from './styles';
import Menu from '../Menu/index';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main ` 

  background-color: var(--black);
  color: var( --white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;

`




function PageDefault() {
  return(
      <React.Fragment>
          <Menu/>
            <Main>
              {Children}
            </Main>
      
          <Footer/>
      </React.Fragment>
  );
}

export default PageDefault;
