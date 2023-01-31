import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";


const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

 
      if (user) {
        console.log("You are signed in");
        return children;
      } else {
        return navigate("/login");
        // console.log("You are not a user")
      }
 
 
  

};
export default ProtectedRoute;
