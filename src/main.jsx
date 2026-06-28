import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "./index.css";
import Layout from "./Layout";
import { Dash_Board } from "./dashboard";
import { Test } from "./pages/test";
import { TestPage } from "./pages/test/text";
import { Overview } from "./pages/Dashboard/Overview/Overview";
// import { AuthProvider } from "./Auth/AuthContex";
// import { ProtectedRoute } from "./Auth/ProtectedRoute";
const App = () => (
  // <AuthProvider>
  <PrimeReactProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route element={<Dash_Board />}>
          {/* 👇 Protect the whole dashboard once here */}

          {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route element={<Dash_Board />}></Route> */}
          {/* </Route> */}
          <Route path="/overview" element={<Overview/>} />
          <Route path="/test" element={<Test />} />
        </Route>

        <Route path="*" element={<div className="p-4">Page Not Found</div>} />
      </Routes>
    </Router>
  </PrimeReactProvider>
  // </AuthProvider>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
