import Base from "../components/Base";
import {
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Container,
  Form,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h3> User Can Login here !!!</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      type="text"
                      placeholder="Enter Email"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter Password"
                    ></Input>
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="dark">Login</Button>
                    <Button color="secondary" type="reset" className="ms-2">
                      Cancel
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Login;
