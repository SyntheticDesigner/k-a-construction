import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./StyledComponents";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <HomePage />
      <Footer/>
    </>
  );
}

export default App;
