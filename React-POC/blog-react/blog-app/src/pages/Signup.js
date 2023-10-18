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
  FormFeedback,
} from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { signUp } from "../utilities/user-services";
import {  toast } from 'react-toastify';
const Signup = () => {
  const [data, setData] = useState(
    {
      name: "",
      email: "",
      password: "",
      about: ""
    }
  );

  const [error, setError] = useState(
    {
      errors: {},
      isError: false,
    }
  );

  useEffect(()=>{
    // console.log(data);
  },[data])

  
  const handleEventChange = (event) => {
    setData({ ...data, [ event.target.name]: event.target.value });
  // console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    signUp(data).then((response)=>{
      console.log(response);
      console.log("Success");
      toast.success("User is registered Successfully")
      {handleReset()}
      {resetError()}
    }).catch((error)=>{
      console.log(error);
      console.log("Failure");
      toast.error("Unfortunatly the user was not registered")
      setError({
        errors: error,
        isError:true
      })

    })
    console.log(data);
  };

  const handleReset =() =>{
    setData({
      name: "",
      email: "",
      password: "",
      about: ""
    })
  }

  const resetError =() =>{
    setError({
      errors: {},
      isError: false,
    })
  }


  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader>
                <h3> Register User here !!!</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name">UserName</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter UserName"
                      onChange={(e) => handleEventChange(e)}
                      value = {data.name}
                      invalid={error.errors?.response?.data?.name?true:false}
                    ></Input>
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => handleEventChange(e)}
                      value = {data.email}
                      invalid={error.errors?.response?.data?.email?true:false}
                      ></Input>
                      <FormFeedback>
                        {error.errors?.response?.data?.email}
                      </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => handleEventChange(e)}
                      value = {data.password}
                      invalid={error.errors?.response?.data?.password?true:false}
                      ></Input>
                      <FormFeedback>
                        {error.errors?.response?.data?.password}
                      </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="about">Tell Us About you</Label>
                    <Input
                      id="about"
                      name="about"
                      type="textarea"
                      placeholder="Enter something about you"
                      onChange={(e) => handleEventChange(e)}
                      value = {data.about}
                      style={{ height: "250px" }}
                      invalid={error.errors?.response?.data?.about?true:false}
                      ></Input>
                      <FormFeedback>
                        {error.errors?.response?.data?.about}
                      </FormFeedback>
                  </FormGroup>
                  <Container>
                    <Button color="dark" >
                      Register
                    </Button>
                    <Button color="secondary" type="reset" className="ms-2" onClick={handleReset}>
                      Reset
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
export default Signup;
