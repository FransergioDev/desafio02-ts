import { 
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Header title='DIO BANK'></Header>
      <Box minHeight='90vh' padding='25px'>
        <Card title='Faça o login' login={login}></Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
