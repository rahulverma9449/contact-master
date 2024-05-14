// import the navbar component
import Navbar from "./Components/Navbar";
import React from "react";
import "./App.css";
// importing contactList component containing the main container
import ContactList from "./Components/ContactList";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Map from "./Components/Pages/Map";
import Website from "./Components/Pages/website";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import if using 1st & 2nd method
function App() {
  return (
    <div className="h-screen flex flex-col w-full">
      {/* rendering the Navbar */}
      <Navbar />
      <Routes>
        <Route path="/website" element={<Website />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/map-globe" element={<Map />} />
        <Route path="/contact-list" element={<ContactList />} />
      </Routes>

      {/* render the ContactList */}
    </div>
  );
}

export default App;
