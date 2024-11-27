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
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Register";

const client = new ApolloClient({
  // uri: "https://graphql.pomelosolutions.com",
  uri: "http://localhost:3600/graphql",
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
        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<SignupPage />} path="/register"></Route>
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
