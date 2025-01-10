import React, { useState } from "react";
import UserNestedRow from "./UserNestedRow";
import ExpandableButton from "./ExpandableButton";

function UserDataListItems({ personDetails }) {
  const [isOpen, setIsOpen] = useState(false); // Initialize the toggle state
  const toggleOpen = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };
  return (
    <tbody>
      <tr>
        <td>
          <ExpandableButton isOpen={isOpen} toggleOpen={toggleOpen} />
        </td>
        <td>
          <b>Person : {personDetails.id}</b>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {isOpen && <UserNestedRow personDetails={personDetails} />}
    </tbody>
  );
}

export default UserDataListItems;
