import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./StyledComponents";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <GlobalStyle />
        <Nav />
        <HomePage />
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default App;
