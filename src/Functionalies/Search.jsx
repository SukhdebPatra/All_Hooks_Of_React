import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState([]);
  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const filterUser = userData
    // .filter(({ name }) => {
    //   return name.indexOf(query) >= 0;
    // }) // one type
    .filter(
      ({ name, email, id }) =>
        name.includes(query) ||
        email.includes(query) || // search as email
        id.toString().includes(query) // search as id
    )
    .map((ele) => (
      <div className="mx-3 my-1" key={ele.id}>
        {" "}
        <span>{ele.id}</span>
        <span>{ele.name}</span>
        <span>{ele.email}</span>
        <span>
          {" "}
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(ele.id)}
          >
            Delete
          </button>
        </span>
      </div>
    ));
  const handleDelete = (id) => {
    const updatedData = userData.filter((user) => user.id !== id);
    setUserData(updatedData);
    console.log("from delete");
    console.log(id);
  };
  return (
    <>
      <div className="card mt-3 mx-2" style={{ width: "90%", height: "auto" }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          name=""
          id=""
        />

        <strong>{filterUser}</strong>
      </div>
    </>
  );
};

export default Search;
