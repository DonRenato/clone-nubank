import React from 'react';

import  Icon  from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/component/Header';
import Tabs from '~/component/Tabs';
import Menu from '~/component/Menu';
import { Container, Content, Card, CardContent, CardFooter,
          CardHeader, Title, Description, Annotation } from './styles';


export default function Main(){
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event([
    {
      nativeEvent:{
        translationY: translateY,
      }
    }
  ],{
    useNativeDriver: true
  },
  )
  function onHandlerStateChanged(event){
    if(event.nativeEvent.oldState ===  State.ACTIVE){
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 100){
        opened = true;
      }else{
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 280 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 280 : 0 ;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }
  return(
    <Container >
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
           onGestureEvent={animatedEvent}
           onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange:[-350, 0, 450],
                outputRange:[-50, 0, 450],
                extrapolate:'clamp'
              }),
            }],
          }}>
            <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
            <Title>Saldo disponivel</Title>
                <Description>R$ 256.734,87</Description>
            </CardContent>

            <CardFooter>
                <Annotation>
                  Transferencia de R$250,00 recebida por Diego Schell Fernandes hoje as 10:00h.
                </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>


      </Content>

      <Tabs translateY={translateY}/>
    </Container>
  )
}
