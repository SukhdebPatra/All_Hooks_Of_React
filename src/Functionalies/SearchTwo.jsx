import axios from "axios";
import React, { useEffect, useState } from "react";

export const SearchTwo = () => {
  const [userData, setUserData] = useState([]);

  const [query, setQuery] = useState("");

  const getData = () => {
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    const updatedData = userData.filter((user) => user.id !== id);
    setUserData(updatedData);
  };

  return (
    <>
      <div className="container my-2">
        <h2 className="text-center">Search Data from the table</h2>{" "}
        <div className="row">
          <div className="col-10">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="col-2">
            <button className="btn btn-sm btn-info" onClick={getData}>
              Get Data
            </button>
          </div>
        </div>
        <table className="table table-dark my-2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Opration</th>
            </tr>
          </thead>
          <tbody>
            {userData.filter(
              ({ name, email }) =>
                name.toLowerCase().includes(query.toLowerCase()) ||
                email.toLowerCase().includes(query.toLowerCase())
            ).length > 0 ? (
              userData
                .filter(
                  ({ name, email }) =>
                    name.toLowerCase().includes(query.toLowerCase()) ||
                    email.toLowerCase().includes(query.toLowerCase())
                )
                .map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
