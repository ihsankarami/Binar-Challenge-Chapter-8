import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from 'reactstrap';

export default function Edit() {
  return (
    <>
      <Container className='text-center mb-5 mt-5'>
        <h2>Edit Player</h2>
      </Container>
      <Container className='d-flex justify-content-center '>
        <Form>
          <FormGroup>
            <Label>Username</Label>
            <Input id='username' name='username' type='name' />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input id='exampleEmail' name='email' type='email' />
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword'>Password</Label>
            <Input id='examplePassword' name='password' type='password' />
          </FormGroup>

          <Button className='btn-success'>Submit</Button>
        </Form>
      </Container>
    </>
  );
}
