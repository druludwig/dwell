import { Link } from 'react-router-dom';
import '../css/Navigation.css'

function Navigation() {
    return (
        <div className="nav-bar">
            <h1><Link to="/"><img src="./images/dwell-logo.png" className="logo" /></Link></h1>

            <ul className="nav-list">
                <li><Link to="/account"><button type="button" className="btn btn-info">My Dashboard</button></Link></li>
                <li><Link to="/newtask"><button type="button" className="btn btn-info">New Task</button></Link></li>
                <li><Link to="/newjob"><button type="button" className="btn btn-info">New Job</button></Link></li>
                <li><Link to="/reports"><button type="button" className="btn btn-info">Reports</button></Link></li>
            </ul>
            <hr />
        </div>
    )
}

export default Navigation;