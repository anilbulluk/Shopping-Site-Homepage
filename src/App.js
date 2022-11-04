import Category from "./component/Category";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Marks from "./component/Marks";
import Offer from "./component/Offer";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Category></Category>
      <Offer></Offer>
      <Marks></Marks>
      <Footer></Footer>
    </div>
  );
}

export default App;
