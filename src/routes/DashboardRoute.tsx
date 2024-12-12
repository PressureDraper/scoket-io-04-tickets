import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { ReactElement } from "react"

export const DashboardRoute = ({ Component }: { Component: ReactElement }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainPage Component={Component} />}
            />
        </Routes>
    )
}
