import { useRouter } from "next/router";
import React from "react";

const developer = () => {
  const router = useRouter();
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const devId = router.query.developerId;
  const content = details.filter((item) => item.id == devId);

  return (
    <div>
      {content.length ? (
        content.map((el) => (
          <h1 key={el.id}>
            {el.name} {el.role}
          </h1>
        ))
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </div>
  );
};

export default developer;
