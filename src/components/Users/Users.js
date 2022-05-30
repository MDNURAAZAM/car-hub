import React from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import User from "./User";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mb-5 pb-5">
      <h2 className="text-primary text-center mt-5 fs-1">All Users</h2>
      <Table responsive>
        <thead>
          <tr className="text-center">
            <th>User</th>

            <th>Role</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user) => (
            <User key={user._id} user={user} refetch={refetch}></User>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
