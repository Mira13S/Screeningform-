import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import * as ReactDOM from "react-dom/client";

/* Theme variables */
import "./theme/variables.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Test } from "./pages/Test";
import AboutUs from "./pages/AboutUs";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/test" replace />} />
        <Route element={<Test />} path="/test"></Route>
        <Route element={<AboutUs />} path="/about"></Route>
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
