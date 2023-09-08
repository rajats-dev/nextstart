import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter();

  const newsId = router.query.newsId;
  return <div>Details</div>;
};

export default Details;
