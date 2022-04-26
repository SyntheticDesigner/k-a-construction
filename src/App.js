import HomePage from "./components/home/HomePage";
import Nav from "./components/nav/Nav";
import { GlobalStyle } from "./StyledComponents";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <HomePage />
    </>
  );
}

export default App;
