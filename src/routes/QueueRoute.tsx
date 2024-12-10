import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"

export const QueueRoute = ({ Component }: any) => {
    return (
        <Routes>
            <Route
                path="/Queue"
                element={<MainPage Component={Component} />}
            />
        </Routes>
    )
}
