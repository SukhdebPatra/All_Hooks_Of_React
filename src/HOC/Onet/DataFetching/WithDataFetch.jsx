import React, { useEffect, useState } from "react";

export default function WithDataFetch(WrappedComponent, fetchData) {
  return function (props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          const data = await fetchData(props);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          set;
          setIsLoading(false);
          setError(error);
        }
      };
      fetchWrapper();
    }, [props]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  };
}
