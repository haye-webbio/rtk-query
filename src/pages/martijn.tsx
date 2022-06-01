import type { NextPage } from "next";
import { useState } from "react";

import { useGetDealsQuery } from "../store/blackfridayApi";

const MartijnPage = () => {
  const [take, setTake] = useState(20);

  const { data, error, isLoading, refetch } = useGetDealsQuery(
    {
      skip: 0,
      take,
    },
    {}
  );

  const onClick = () => {
    setTake(take + 10);
  };

  const refetchOnClick = () => {
    refetch();
  };

  return (
    <>
      {String(isLoading)}
      <button onClick={refetchOnClick}>Refetch</button>
      <button onClick={onClick}>Haal deals op</button>
      <div>{data?.deals?.length}</div>
    </>
  );
};

export default MartijnPage;
