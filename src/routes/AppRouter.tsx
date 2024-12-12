import {
    Route,
    HashRouter as Router,
    Routes,
    Navigate
} from "react-router-dom";
import { DashboardRoute } from "./DashboardRoute";
import { Login } from "../pages/Login"
import { Queue } from "../pages/Queue";
import { CreateTicket } from "../pages/CreateTicket";
import { Desktop } from "../pages/Desktop";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/login/*"
                    element={<DashboardRoute Component={<Login />} />}
                />

                <Route
                    path="/queue/*"
                    element={<DashboardRoute Component={<Queue />} />}
                />

                <Route
                    path="/createTicket/*"
                    element={<DashboardRoute Component={<CreateTicket />} />}
                />

                <Route
                    path="/desktop/*"
                    element={<DashboardRoute Component={<Desktop />} />}
                />

                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    )
}
