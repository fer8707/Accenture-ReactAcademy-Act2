import React from "react";
import AddUserModal from "./AddUserModal";

export default function Header({ numberOfUsers, addUser }) {
  return (
    <grid>
      <grid item>
        <h1>User manager: {numberOfUsers}</h1>
      </grid>
      <grid item>
        <AddUserModal addUser={addUser}/>
      </grid>
    </grid>
  );
}
