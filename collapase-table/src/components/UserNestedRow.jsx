import React from "react";

function UserNestedRow({ personDetails }) {
  return (
    <tr>
      <td></td>
      <td>{personDetails.email}</td>
      <td>{personDetails.name}</td>
      <td>{personDetails.phone}</td>
      <td>{personDetails.country}</td>
      <td>{personDetails.alphanemeric}</td>
    </tr>
  );
}

export default UserNestedRow;
