import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from "./App"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
  
  
  const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route path="" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        } />
        
        </Route>
    )
  );
  
  export default Router