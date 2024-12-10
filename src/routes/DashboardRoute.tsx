import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"


export const DashboardRoute = ({ Component }: any) => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainPage Component={Component} />}
            />
        </Routes>
    )
}
