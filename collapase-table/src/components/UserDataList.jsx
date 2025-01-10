import React from "react";
import { Table } from "react-bootstrap";
import { info } from "../Data/info";
import UserDataListItems from "./UserDataListItems";
function UserDataList() {
  return (
    <Table striped bordered hover>
      <thead>
        <th></th>
        <th>Email</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Country</th>
        <th>Alphanumeric</th>
      </thead>
      {info.map((personDetails) => (
        <UserDataListItems personDetails={personDetails} />
      ))}
    </Table>
  );
}

export default UserDataList;
