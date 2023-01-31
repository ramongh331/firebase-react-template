import { Link } from "react-router-dom"
import "../index.css"

export default function Header(props){
   
 
    
    return (
        <div className="header">
            <h1>Firebase Auth Template In React</h1>
           <Link to="/home">Home</Link>
           <Link to="/login">Log In</Link>

        </div>
    )
}