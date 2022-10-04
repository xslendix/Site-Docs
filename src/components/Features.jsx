import React from "react";
import clsx from "clsx";

const FeatureList = [
  {
    title: "Learn the Basics",
    Svg: require('@site/static/svgs/elephant.svg').default,
    description: (
      <>
        Explore all the cool features that await in TempleOS. Over all, proving to be a valuable learning experience.
      </>
    ),
  },
  {
    title: "Learn HolyC",
    Svg: require('@site/static/svgs/HolyC_Logo.svg').default,
    description: (
      <>
        Learn how to code in HolyC; write your own programs, games, etc!
      </>
    ),
  },
  {
    title: "Give Back",
    Svg: require('@site/static/svgs/terry.svg').default,
    description: (
      <>
       Love Thy Neighbor; made something cool? Why not share it in the communtiy
      </>
    ),
  },


];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
      <Svg className={Svg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features">

      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
}
