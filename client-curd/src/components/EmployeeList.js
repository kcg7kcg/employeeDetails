import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const EmployeeList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:8080/employees");
      setData(result.data);
    };
    getData();
  }, []);

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:8080/employees/${id}`).then((result) => {
      props.history.push("/employee-list");
    });
  };

  const editEmployee = (id) => {
    props.history.push({
      pathname: "/edit/" + id,
    });
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Employee List
            </CardHeader>

            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => {
                    return (
                      <tr>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNo}</td>
                        <td>
                          <div class="btn-group">
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                editEmployee(item.id);
                              }}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                deleteEmployee(item.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeList;
