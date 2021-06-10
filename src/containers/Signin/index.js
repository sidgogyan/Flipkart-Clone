import React from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from "../../components/UI/Input"
import {login} from "../../actions"
import {useDispatch} from 'react-redux'

function Signin() {
   const dispatch=useDispatch();
  const  userLogin=(e)=>{
    e.preventDefault();
    const user={
    email:"sid9057819561@gmail.com",
    password:"Sid12345"
    }
    dispatch(login(user));
  }




    return (
     <Layout>
        <Container>
            <Row style={{marginTop:"50px"}}>
              <Col md={{span:6, offset:3}}>

                <Form onSubmit={userLogin}>
                    <Input
                          label="Email"
                          type="email"
                          placeholder="Enter Email"
                          value=""
                          onChange={()=>{}}
                          errorMessage="We'll never share your email with anyone else."
                         
                         />

                     <Input
                          label="Password"
                          type="password"
                          placeholder="Enter Password"
                          value=""
                          onChange={()=>{}}
                          

                        /> 
                          
                      <Button variant="primary" type="submit">
                            Submit
                      </Button>
                        
                        
                </Form>
              </Col>
            </Row>
        </Container>
     </Layout>
    )
}

export default Signin
