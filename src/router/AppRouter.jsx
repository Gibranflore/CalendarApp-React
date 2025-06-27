import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"



const authSatus = "authtenticate"

export const AppRouter = () => {
  return (
    
        <Routes>
            {
                (authSatus === "not-authtentication")
                ? <Route path="/auth/*" element={ <LoginPage/> } />
                : <Route path="/*" element={ <CalendarPage/> } />
            }
                <Route path="/*" element={ <Navigate to="/auth/Login" />} />
                
        </Routes>
    )
}
