import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import { Container } from "./Components/index";
import { Header, Footer } from "./Sections/index";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              exact={route.exact || false}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
