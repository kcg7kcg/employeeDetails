import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

const AddEmployee = (props) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  });

  const [showLoading, setShowLoading] = useState(false);

  const apiUrl = "http://localhost:8080/employees";

  const addEmployee = (e) => {
    e.preventDefault();
    const data = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phoneNo: employee.phoneNo,
    };

    axios.post(apiUrl, data).then((result) => {
      props.history.push("/employee-list");
    });
  };

  const onChange = (e) => {
    e.persist();

    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={addEmployee}>
                  <h1>Register</h1>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={employee.firstName}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      id="lastName"
                      value={employee.lastName}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={employee.email}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Phone No"
                      name="phoneNo"
                      id="phoneNo"
                      value={employee.phoneNo}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>

                      <Col xs="12" sm="6">
                        <Button className="btn btn-info mb-1" block>
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddEmployee;
