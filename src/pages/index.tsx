import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import { useGetDealsQuery } from "../store/blackfridayApi";
import Link from "next/link";

const IndexPage: NextPage = () => {
  const { data, ...rest } = useGetDealsQuery({
    skip: 0,
    take: 20,
  });

  console.log(rest);

  return (
    <div className={styles.container}>
      <Link href="/martijn">HALLO MARTIJN</Link>
      <div>{data?.deals?.length}</div>
    </div>
  );
};

export default IndexPage;
