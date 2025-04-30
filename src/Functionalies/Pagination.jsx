import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(userData.length / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

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
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "20px" }}>
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              style={{
                margin: "0 5px",
                backgroundColor: currentPage === num ? "lightblue" : "white",
              }}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pagination;
