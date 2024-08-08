import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home1 from "./Pages/Home";
import About1 from "./Pages/About1";
import Blog1 from "./Pages/Blog1";
import Cctv from "./Pages/Cctv";
import Ups from "./Pages/DCPUPS";
import ContactUs from "./Pages/Contactus";
import PlacesRoute from "./Pages/PlacesRoute";
// DCP CCTV
import DCPB1200P from "./Pages/Detail/DCPB1200P";
import DCPB1200M from "./Pages/Detail/DCPB1200M"
import DCPXVR2104S from "./Pages/Detail/DCPXVR2104S"
import DCPXVR2100L from "./Pages/Detail/DCPXVR2100L"
import DCPXVR216S from "./Pages/Detail/DCPXVR216S"
import DCPXVR2116S from "./Pages/Detail/DCPXVR2116S"
// DCP UPS
import DCPVersion20 from "./Pages/Detail2/DCPVersion20"
import DCPPOWERTOWER from "./Pages/Detail2/DCPPOWERTOWER"
import DCPPOWERRT from "./Pages/Detail2/DCPPOWERRT"
import DCPPOWER3100 from "./Pages/Detail2/DCPPOWER3100"
import DCPPOWER3300 from "./Pages/Detail2/DCPPOWER3300"
import DCPDCMINIUPS from "./Pages/Detail2/DCPDCMINIUPS"
import DCPBATTERY from "./Pages/Detail2/DCPBATTERY"



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

            {/* DCP CCTV */}
            <Route path="dcpcctv/details/DCP-B1200P-0360B" element={<DCPB1200P />} />
            <Route path="dcpcctv/details/DCP-B1200M-0280B" element={<DCPB1200M />} />
            <Route path="dcpcctv/details/DCP-XVR2104-S" element={<DCPXVR2104S />} />
            <Route path="dcpcctv/details/DCP-XVR2100-L" element={<DCPXVR2100L />} />
            <Route path="dcpcctv/details/DCP-XVR216-S" element={<DCPXVR216S />} />
            <Route path="dcpcctv/details/DCP-XVR2116-S" element={<DCPXVR2116S />} />

            {/* DCP UPS */}
            <Route path="dcpups/details2/DCPVersion20" element={<DCPVersion20 />} />
            <Route path="dcpcctv/details2/DCP-POWER-TOWER" element={<DCPPOWERTOWER />} />
            <Route path="dcpcctv/details2/DCP-POWER-RT" element={<DCPPOWERRT />} />
            <Route path="dcpcctv/details2/DCP-POWER-3100" element={<DCPPOWER3100 />} />
            <Route path="dcpcctv/details2/DCP-POWER-3300" element={<DCPPOWER3300 />} />
            <Route path="dcpcctv/details2/DCP-DCMINI-UPS" element={<DCPDCMINIUPS />} />
            <Route path="dcpcctv/details2/DCP-BATTERY" element={<DCPBATTERY />} />
            
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
