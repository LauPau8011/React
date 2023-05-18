import "./App.css";

// importai viršuje
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassDiv from "./components/ClassDiv";
import ClassButton from "./components/ClassButton";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Product from "./components/Product";
import Products from "./components/Products";

// apibrėžiam komponento pavadinimą, visada didžioji raidė.
// geroji praktika: Failo pavadinimas toks pat kaip komponento pavadinimas
function App() {
  const name = "Rokas";
  function getName() {
    return "Tadas";
  }
  const getSurname = () => {
    return "Tadukas";
  };
  const surname = getSurname();

  return (
    <div>
      <h1>Rokas</h1>
      <h2>{name}</h2> <h2>{getName()}</h2>
      <h2>{getSurname()}</h2> <h2>{surname}</h2>
      <FuncButton title="Click me" />
      <FuncButton title="Spausk mane" />
      <FuncButton title="Čia nespausti" />
      <FuncDiv title="Paleidimas" />
      <ClassButton title="Class mygtukas" />
      <ClassDiv title="Class paleidimas" /> <Greeting name="Paula" />
      <Card
        imageUrl="https://th.bing.com/th/id/OIP.ttDHglA-6B03ekW810ZqjwEsCo?pid=ImgDet&rs=1"
        title="Lirazd"
        subtitle="SThe lizard reaches up to 15 cm (5.9 in) from the tip of the muzzle to the cloaca. The tail can be up to twice the length of the body, total length is up to 40 cm (16 in). This lizard sometimes sheds its tail (autotomy) to evade the grasp of a predator, regrowing it later."
      />
      <Card
        imageUrl="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/17/21/pg-8-nightingale-rex.jpg"
        title="Nightingale"
        subtitle="The common nightingale is slightly larger than the European robin, at 15–16.5 cm (5.9–6.5 in) length. It is plain brown above except for the reddish tail. It is buff to white below. The sexes are similar. "
      />
      <Avatar name="Laura Janulevičiūtė" />
      <Avatar name="Paula Andrijaitytė" />
      <Products />
    </div>
  );
}

export default App;
