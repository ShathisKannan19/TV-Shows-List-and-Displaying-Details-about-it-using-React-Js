import React, { useState } from "react";
import ShowList from "./ShowList";
import ShowDetails from "./ShowDetails";
import NavbarEx from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const App = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      <NavbarEx />
      {selectedShow ? (
        <ShowDetails show={selectedShow.show} />
      ) : (
        <ShowList onSelectShow={handleSelectShow} />
      )}
      <Router>
        <Routes>
          <Route path="/show" element={<ShowList />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route element={ShowList} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
