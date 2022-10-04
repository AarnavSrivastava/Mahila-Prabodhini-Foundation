import Navbar from './components/navbar.js'
import BottomLinks from './components/bottomlinks.js';

import About from './components/pages/minor_pages/About.js';
import Contact from './components/pages/minor_pages/Contact.js';
import Events from './components/pages/major_pages/Events.js';
import Home from './components/pages/major_pages/Home.js';
import TermsAndConditions from './components/pages/minor_pages/TermsAndConditions.js';
import PrivacyPolicy from './components/pages/minor_pages/PrivacyPolicy.js';

import {Route, Routes} from "react-router-dom";
import Donate from './components/pages/major_pages/Donate.js';


function App() {
  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/termsandconditions" element={<TermsAndConditions />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
      </Routes>
      <BottomLinks />
    </div>
  );
}

export default App;
