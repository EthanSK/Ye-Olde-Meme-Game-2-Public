import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy for n00bs",
    imgSrc: require("@site/static/img/roblox-noob-meme-man.png").default,
    imgAlt: "Roblox Noob",
    description: (
      <>
        ModScripting is designed to be easy for n00bs, providing tutorials,
        community mods, & an in-game API reference with examples to copy for
        everything
      </>
    ),
  },
  {
    title: "Immense Power at your Fingertips",
    imgSrc: require("@site/static/img/ok-hand.png").default,
    imgAlt: "OK Hand Meme",
    description: (
      <>
        Have access to ridiculously unlimited possibilities to create your own
        custom levels in Ye Olde Meme Game 2
      </>
    ),
  },
  {
    title: "Powered by Lua, powered by You",
    imgSrc: require("@site/static/img/lua-logo.png").default,
    imgAlt: "Lua Logo",
    description: (
      <>
        Write your ModScripts in the simple language of Lua, share and discuss
        your creations with the community
      </>
    ),
  },
];

function ImageComponent(props: { src: string }) {
  return <img src={props.src} className={styles.featureImg} />;
}

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <ImageComponent src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
