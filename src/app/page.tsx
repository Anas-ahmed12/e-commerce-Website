
import { Main } from "next/document";
import Image from "next/image";
import Hero from "./component/hero";
import Summer from "./component/summer";
import Summer2 from "./component/summer2";
import Container from "./component/container";
import Womensec from "./component/womensec";
import Onsale from "./component/onsale";
import Review from "./component/review";
export default function Home() {
  return (
    <main>
      <Hero/>
      <Summer/>
      <Summer2/>
      <Container/>
      <Womensec/>
      <Onsale/>
      <Review/>
    </main>
  );
}
