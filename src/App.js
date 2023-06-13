import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { ReviewList } from "./Components/ReviewList";
import { useState } from "react";
import Home from "./Components/Home";
import { Nav } from "./Components/Nav";
import { SingleReview } from "./Components/SingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ReviewList />
            </div>
          }
        />
        <Route
          path="/reviews"
          element={
            <div>
              <ReviewList />
            </div>
          }
        ></Route>
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
