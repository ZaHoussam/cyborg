import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";

import { Container } from "./Components/index";
import { Header, Footer } from "./Sections/index";
import { Home } from "./Views/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
};

export default App;
