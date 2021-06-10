import React from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from "../../components/UI/Input"

function Signin() {
    return (
     <Layout>
        <Container>
            <Row style={{marginTop:"50px"}}>
              <Col md={{span:6, offset:3}}>

                <Form>
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
