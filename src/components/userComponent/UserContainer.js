import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/user/userActions";
import { Table, Container } from "react-bootstrap";
import "./user.css";
const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container>
      {userData.loading ? (
        <h2>Loading ...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>Employee List</h2>
          <div>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone no.</th>
                </tr>
              </thead>
              <tbody>
                {userData.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.gender}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
