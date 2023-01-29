import { Header } from "../components/header/header";
import { Draw } from "../components/drawtable/draw";
import { Tablesetings } from "../components/tablesetings/tablesetings";

const Serviceclassifier = () => {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <Tablesetings />
        <Draw />
      </main>
      <footer></footer>
    </body>
  );
};
export { Serviceclassifier };
