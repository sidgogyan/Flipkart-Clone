import React from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from "../../components/UI/Input"
function Signup() {
    return (
        <div>
            <Layout>
        <Container>
            <Row style={{marginTop:"50px"}}>
              <Col md={{span:6, offset:3}}>

                <Form>
                <Row>
                    <Col md={6}>
                         <Input
                          label="FirstName"
                          type="text"
                          placeholder="Enter FirstName"
                          value=""
                          onChange={()=>{}}
                         

                         />
                    </Col>
                    <Col md={6}>
                        <Input
                          label="LastName"
                          type="text"
                          placeholder="Enter LastName"
                          value=""
                          onChange={()=>{}}
                         

                         />
                    </Col>
                </Row>
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
        </div>
    )
}

export default Signup
