import React from 'react';

import { Container, Top, Logo, Title} from './styles';

import  Icon  from 'react-native-vector-icons/Feather';
Icon.loadFont();

import logo from "~/assets/Nubank_Logo.png";


export default function Header()  {
    return(
      <Container>
        <Top>
          <Logo source={logo} />
          <Title>Renato</Title>
        </Top>
        <Icon name="chevron-down" size={20} color="#FFF" />
      </Container>
    );
}
