import Accessories from "./Accessories/Accessories";
import Box from "./Box/Box";
import Buy from "./Buy/Buy";
import Games from "./Games/Games";
import { Header } from "./Header/Header";
import Metaverse from "./Metaverse/Metaverse";
import Product from "./Product/Product";
import Subscr from "./Subscr/Subscr";
import Footer from "./footer/Footer";
import Navigation from "./nav/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation/>
      <Header/>
      <Product/>
      <Games/>
      <Buy/>
      <Box/>
      <Metaverse/>
      <Accessories/>
      <Subscr/>
      <Footer/>
    </div>
  );
}

export default App;
