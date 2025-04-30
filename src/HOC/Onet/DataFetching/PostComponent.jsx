import React from "react";
import WithDataFetch from "./WithDataFetch";
import { fetchPosts } from "./fetchPorst";

const PostComponent = ({ data, isLoading, error }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const PostComponentWithData = WithDataFetch(PostComponent, fetchPosts);
