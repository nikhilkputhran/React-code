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
import { useEffect, useState } from "react";
import {  toast } from 'react-toastify';
import { loginUser } from "../utilities/user-services";
import { login,isLoggedIn,logout,getUserDetails } from "../utilities/common";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate=useNavigate();

  const [loginDetails, setLoginDetails] = useState(
    {
      userName: '',
      password: ''      
    }    
  );
  const [error, setError] = useState(
    {
      errors: {},
      isError: false,
    },
    {}
  );

  useEffect(()=>{
    console.log(loginDetails);
  },[loginDetails])

  const handleEventChange = (event) => {

    console.log([ event.target.name],event.target.value );
    setLoginDetails({ ...loginDetails, [ event.target.name]: event.target.value });
  //  console.log(loginDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(loginDetails.userName.trim() =="" || loginDetails.password.trim() =="")
    {
      toast.error("userName or password cant be null")

    }
   
    loginUser(loginDetails).then((data)=>{
      console.log(data);


      login(data,()=>{
        console.log("saved in local storage");
      })
      navigate("/user/dashboard")
      console.log("Success");
      toast.success("User is logged in Successfully")


     
    }).catch((err)=>{
      console.log(err);
      console.log("Failure");
      if(err.response.status == 400 || err.response.status == 404)
      {
        toast.error(err.response.data.message)
      }
      else{
        toast.error("Unfortunatly the user was not logged in")
      }
      
      setError({
        errors: error,
        isError:true
      })

    })
    
  };

  const handleReset =() =>{
    setLoginDetails({
      userName: "",
      password: ""    
    })
  }

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
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      type="text"
                      name="userName"
                      placeholder="Enter Email"
                      value={loginDetails.userName}
                      onChange={(e) => handleEventChange(e)}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value = {loginDetails.password}
                      onChange={(e) => handleEventChange(e)}
                    ></Input>
                  </FormGroup>
                  <Container className="text-center">
                    <Button color="dark">Login</Button>
                    <Button color="secondary" type="reset" className="ms-2" onClick={handleReset}>
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
