import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  // {
  //   title: "A Web3 Native Network State",
  //   Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  //   description: (
  //     <>
  //       Dean's List connects Web3 expertise to Solana protocols for ecosystem
  //       enhancement and user experience refinement.
  //     </>
  //   ),
  // },
  // {
  //   title: "Feedback-driven development",
  //   Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
  //   description: (
  //     <>
  //       We are Web3 power users giving feedback on user experience for your
  //       protocol.
  //     </>
  //   ),
  // },
  {
    title: "Overview",
    link: "/docs/Whitepaper/what-is-deans-dao",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We've been here for a while, made a couple friends along the way…and
        would love to get to know you too!
      </>
    ),
  },
  {
    title: "Governance",
    link: "/docs/Governance%20Framework/governance-model",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Learn about unique, participation-based governance system powering
        Dean's List DAO.
      </>
    ),
  },
  {
    title: "Citizenship",
    link: "/docs/Onboarding%20Manual/how-to-join",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>See all available options on how to become one of us!</>,
  },
];

function Feature({ title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={link}>
            {title}
          </Link>
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        {/* <Heading as="h3">{title}</Heading> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row ">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
