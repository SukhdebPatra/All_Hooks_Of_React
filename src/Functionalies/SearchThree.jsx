import React, { useState } from "react";

const userList = [
  {
    name: "Sukhdeb",
    id: 1,
  },
  {
    name: "Rohit",
    id: 2,
  },
  {
    name: "Rohan",
    id: 3,
  },
];

const SearchThree = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search Data"
              name=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            {userList

              .filter(({ name }) =>
                name.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => {
                return (
                  <div
                    key={user.id}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {user.name} {user.id}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchThree;
