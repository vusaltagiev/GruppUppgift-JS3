import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const login = () => {
  return (
        <Form className='loginForm'> 
        <p className='disclaimer'>Please Login to Your Account</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='LoginLabel'>E-mail* <p>Don't have a Account yet?</p></Form.Label>
            <Form.Control className='loginInput' type="email"/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='LoginLabel'>Password* <p>Forgot Your Password ?</p></Form.Label>
            <Form.Control className='loginInput' type="password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Please keep me logged in" />
          </Form.Group>
          <Button variant="danger" type="submit" className='loginBtn'>
            Submit
          </Button>
        </Form>
  )
}

export default login