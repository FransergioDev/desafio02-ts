import { Center, Heading, Text } from '@chakra-ui/react';
import './Header.css'

interface IHeader {
  title: string;
}

export const Header = ({title}: IHeader) => {
  return(
    <Center backgroundColor='#a037d8'>
      <Heading as='h2' size='4xl' padding='0.1em'>
        <Text fontSize='5xl' color='#fffffe'>{title}</Text>
      </Heading>
    </Center>
  )
}