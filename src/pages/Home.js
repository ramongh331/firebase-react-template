// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Home = () => {
 
    
    const auth = getAuth();
    // const user = auth.currentUser;
    
    const navigate = useNavigate();
      

    const handleLogout = () => {
        signOut(auth) 
          .then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully");
          })
          .catch((error) => {
            // An error happened.
          });
      };
    
  

  return (
    <>
      <nav>
        <p>Welcome! You are now signed in and this page is Protected</p>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
        
      </nav>
    </>
  );
};

export default Home;
