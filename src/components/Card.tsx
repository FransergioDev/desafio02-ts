import { Box, Center, Container, Heading, Input } from "@chakra-ui/react"
import GenericButton from "./GenericButton/GenericButton"

interface ICardLogin {
  title: string,
  login: () => void
}

export const Card = ({ title, login }: ICardLogin) => {
  return(
    <Container maxW='450px' color='white' marginTop={'25vh'} >
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' height={'25vh'}>
        <Center>
          <Heading size='xs' textTransform='uppercase' fontSize='2em' color='#000' paddingBottom='1.2em'>
            {title}
          </Heading>
        </Center>
        <Input placeholder="E-mail" textColor="#000" marginBottom='0.2em'/>
        <Input placeholder="Password" type="password" textColor="#000" marginBottom='0.2em'/>
        <Center paddingTop='1.2em'>
          <GenericButton click={login}>Login</GenericButton>
        </Center>
    </Box>
  </Container>

  )
}