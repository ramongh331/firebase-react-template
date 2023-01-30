import { Link } from "react-router-dom"



const Landing =  () => {



return (
    <div>
        <h2>This is the Landing Page</h2>
        <Link to="/signup"><button>Sign Up</button></Link>
        <Link to="/login"><button>Log In</button></Link>
    </div>
)
}

export default Landing