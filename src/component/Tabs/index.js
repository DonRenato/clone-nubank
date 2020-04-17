import React from 'react';

import  Icon  from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { Container, TabsItem, TabsContainer, TabText } from './styles';

// import { Container } from './styles';

export default function Tabs({translateY})  {
    return(
      <Container style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange:[0, 30],
            extrapolate: 'clamp',
          }),
        }],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange:[1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
        <TabsContainer>
          <TabsItem>
            <Icon name="person-add" size={24} color="#FFF" />
            <TabText>Indicar amigos</TabText>
          </TabsItem>

          <TabsItem>
            <Icon name="chat-bubble-outline" size={24} color="#FFF" />
            <TabText>Cobrar</TabText>
          </TabsItem>

          <TabsItem>
            <Icon name="arrow-downward" size={24} color="#FFF" />
            <TabText>Depositar</TabText>
          </TabsItem>

          <TabsItem>
            <Icon name="arrow-upward" size={24} color="#FFF" />
            <TabText>Transferir</TabText>
          </TabsItem>

          <TabsItem>
            <Icon name="lock" size={24} color="#FFF" />
            <TabText>Bloquear Cartao</TabText>
          </TabsItem>

        </TabsContainer>
      </Container>
    );
}
