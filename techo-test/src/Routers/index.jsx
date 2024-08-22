import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, Menu } from "@/pages";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
