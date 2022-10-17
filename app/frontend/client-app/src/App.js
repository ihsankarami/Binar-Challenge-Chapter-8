import { Button, Container } from 'react-bootstrap';
import NewPlayerForm from './components/NewPlayer';

function App() {
  return (
    <>
      <Container className='md'>
        <NewPlayerForm />
      </Container>
    </>
  );
}

export default App;
