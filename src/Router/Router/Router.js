import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import DashboardPage from "../../Pages/DashboardPage/DashboardPage";
import AddDoctors from "../../Pages/DashBoards/AddDoctors/AddDoctors";
import ManageDoctors from "../../Pages/DashBoards/ManageDoctors/ManageDoctors";
import PayMent from "../../Pages/DashBoards/PayMent/PayMent";
import Appointment from "../../Pages/Home/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Home/LogIn/LogIn";
import MyAppointment from "../../Pages/MyAppointment/MyAppointment";
import DisPlayError from "../../Pages/Sheare/DisplayError/DisPlayError";
import SignUp from "../../Pages/SingUp/SignUp";
import AdminRouter from "../AdminRouter/AdminRouter";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisPlayError></DisPlayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    },
    
    {
        path: '/dashboard',
        element: <PrivateRouter><DashboardPage></DashboardPage></PrivateRouter>,
        errorElement: <DisPlayError></DisPlayError>,
        children: [
            {
                path: '/dashboard', 
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRouter><AllUsers></AllUsers></AdminRouter>
            },
            {
                path: '/dashboard/adddoctors',
                element: <AdminRouter><AddDoctors></AddDoctors></AdminRouter>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRouter><ManageDoctors></ManageDoctors></AdminRouter>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PayMent></PayMent>,
                loader: ({ params }) => fetch(`https://doctores-protal-server.vercel.app/bookings/${params.id}`)

            },

        ]
    }
])


export default router;