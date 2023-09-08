import Link from "next/link";
import { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <h1>
            <Link href="/aboutUs/1">Yash</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/aboutUs/2">Vaibhav</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/aboutUs/3">Suresh</Link>
          </h1>
        </li>
      </ul>
    </Fragment>
  );
};

export default AboutUs;
