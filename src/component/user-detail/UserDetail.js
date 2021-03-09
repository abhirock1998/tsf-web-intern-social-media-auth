import React from "react";
import "./user-detail.css";
import {Button} from "@material-ui/core"
function UserDetail({ user }) {
  return (
    <div className="userDetail">
      <div className="userDetail__content">
        <img src={user?.photoURL} alt={user?.displayName} />
        <div className="userDetail__contentProfile">
          <h1>{user?.displayName}</h1>
          <p>
            Email : <small>{user?.email}</small>
          </p>
          <p>
            Contact Number : <small>{user?.phoneNumber}</small>
          </p>
          <p>
            Auth Provider : <small>{user?.providerId}</small>
          </p>
        </div>
      </div>
      <a href="/"> <Button>Go Back Home Page</Button></a>
     
    </div>
  );
}

export default UserDetail;
