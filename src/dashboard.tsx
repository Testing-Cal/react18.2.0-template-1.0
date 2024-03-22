import { Outlet, Link  } from "react-router-dom";

function Dashboard(){
    return (
        <div>
        <h2>This is Dashboard</h2>
        <nav style={{margin: '20px'}}>
        <Link to="/dashboard/nested">Nested</Link>
        </nav>
        <Outlet />
        </div>
    );
}

export default Dashboard;
