import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home1 from "./Pages/Home";
import About1 from "./Pages/About1";
import Blog1 from "./Pages/Blog1";
import Cctv from "./Pages/Cctv";
import Ups from "./Pages/DCPUPS";
import ContactUs from "./Pages/Contactus";
import PlacesRoute from "./Pages/PlacesRoute";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home1 />} />
            <Route path="aboutus" element={<About1 />} />
            <Route path="blog" element={<Blog1 />} />
            <Route path="dcpcctv" element={<Cctv />} />
            <Route path="dcpups" element={<Ups />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="best-places" element={<PlacesRoute />} />
            
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
