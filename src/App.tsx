import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import * as ReactDOM from "react-dom/client";
import ToastContainer from "./pages/ToastContainer";
/* Theme variables */
import "./theme/variables.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Home } from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import { RequestStatus } from "./pages/RequestStatus";
import Reports from "./pages/Reports";
import HelpCenter from "./pages/HelpCenter";
import ScreeningForm from "./pages/ScreeningForm";
import IntakeForm from "./pages/IntakeForm";
import ClientMatterChange from "./pages/ClientMatterChange";
import ClientMatterDetails from "./pages/ClientMatterDetails";
import RiskDetails from "./pages/RiskDetails";
import SettingsPage from "./pages/Settings";
import ConflictDetails from "./pages/ConflictDetails";
import { LandingPage } from "./pages/LandingPage";

import ToastContainer from "./pages/ToastContainer";
import Profile from "./pages/Profile";

const client = new ApolloClient({

  uri: "https://graphql.pomelosolutions.com",
  //uri: "http://localhost:3600/graphql",

  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Home />} path="/dashboard"></Route>
        <Route element={<AboutUs />} path="/about"></Route>

        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<SignupPage />} path="/register"></Route>

        <Route element={<RequestStatus />} path="/requeststatus"></Route>
        <Route element={<Reports />} path="/report"></Route>
        <Route element={<HelpCenter />} path="/help"></Route>
        <Route element={<ScreeningForm />} path="/screeningform"></Route>
        <Route element={<IntakeForm />} path="/intake"></Route>
        <Route
          element={<ClientMatterChange />}
          path="/clientmatterchanges"
        ></Route>
        <Route
          element={<ClientMatterDetails />}
          path="/clientmatterdetails"
        ></Route>
        <Route element={<RiskDetails />} path="/riskdetails"></Route>
        <Route element={<SettingsPage />} path="/settings"></Route>
        <Route element={<ConflictDetails />} path="/conflictdetails"></Route>
        <Route element={<ResetPassword />} path="/resetpassword"></Route>

        <Route element={<Profile />} path="/profile"></Route>
      </Routes>
      <ToastContainer />
    </Router>
  </ApolloProvider>
);

export default App;
