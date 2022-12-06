import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RenderPosts from "./Components/RenderPosts";
import Postview from "./Components/PostView/Postview";
import LandingPage from "./Components/LandingPage";
import AddPostForm from "./Components/AddPostForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/postview"
            element={
              <>
                <Postview></Postview>
                <RenderPosts></RenderPosts>
              </>
            }
          ></Route>
          <Route
            path="/addpost"
            element={
              <>
                <Postview></Postview>
                <AddPostForm></AddPostForm>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
