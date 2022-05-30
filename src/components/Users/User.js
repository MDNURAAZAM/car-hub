import React from "react";
import { toast } from "react-toastify";

const User = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`${email} is now an ADMIN`);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`${email} is deleted`);
      });
  };
  return (
    <tr>
      <td>{email}</td>

      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-success btn-sm px-3">
            MAKE ADMIN
          </button>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm px-3"
          onClick={() => handleDelete(email)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default User;
