import { Center, Heading, Text } from '@chakra-ui/react';
import './Header.css'

interface IHeader {
  title: string;
}

export const Header = ({title}: IHeader) => {
  return(
    <Center>
      <Heading as='h2' size='4xl'>
        <Text fontSize='5xl' color='#ffa500'>{title}</Text>
      </Heading>
    </Center>
  )
}