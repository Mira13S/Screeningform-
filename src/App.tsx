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
import { Home } from "./pages/Home";
import AboutUs from "./pages/AboutUs";
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
        <Route element={<Home />} path="/test"></Route>
        <Route element={<AboutUs />} path="/about"></Route>
        <Route element={<RequestStatus />} path="/requeststatus"></Route>
        <Route element={<Reports />} path="/report"></Route>
        <Route element={<HelpCenter />} path="/help"></Route>
        <Route element={<ScreeningForm />} path="/screeningform"></Route>
        <Route element={<IntakeForm />} path="/intake"></Route>
        <Route
          element={<ClientMatterChange />}
          path="/clientmatterchange"
        ></Route>
        <Route
          element={<ClientMatterDetails />}
          path="/clientmatterdetails"
        ></Route>
        <Route element={<RiskDetails />} path="/riskdetails"></Route>
        <Route element={<SettingsPage />} path="/settings"></Route>
        <Route element={<ConflictDetails />} path="/conflictdetails"></Route>
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
