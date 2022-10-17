import { Container, Label, Input, Table, Button } from 'reactstrap';

export default function Dashboard() {
  return (
    <>
      <Container className='text-center mb-5 mt-5'>
        <h2>Dashboard</h2>
      </Container>
      <Container>
        <h4 className='ml-6 d-block'>Search player id</h4>
      </Container>
      <Container className='mb-4 d-flex'>
        <Input
          className='mb-2'
          style={{ width: 200 + 'px' }}
          placeholder='example:2'
        ></Input>
        <Container className='d-flex justify-content-between'>
          <Button color='primary'>Search</Button>
          <Button color='success'>Add new player</Button>
        </Container>
      </Container>
      <Container>
        <Table>
          <thead>
            <tr className='text-center'>
              <th>id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Exp</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <th scope='row'>1</th>
              <td>Fathur</td>
              <td>fathur@mail.com</td>
              <td>10</td>
              <td>5</td>
              <td className='d-flex justify-content-center gap-2'>
                <Button>Edit</Button>
                <Button className='btn-danger'>Delete</Button>
              </td>
            </tr>
            <tr className='text-center'>
              <th scope='row'>2</th>
              <td>Emil</td>
              <td>emil@mail.com</td>
              <td>15</td>
              <td>8</td>
              <td className='d-flex justify-content-center gap-2'>
                <Button>Edit</Button>
                <Button className='btn-danger'>Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
