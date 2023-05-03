import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Profile from "./components/Profile";
import CancelledOrder from "./pages/CancelledOrder";
import SingleTour from "./pages/SingleTour";
import OrderDetail from "./pages/OrderDetail";
import CustomerOrder from "./pages/CustomerOrder";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { TourDetails } from "./pages/TourDetail";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "helpers/firebase/auth";
import { getUserData } from "helpers/firebase/db";
import BusinessProfile from "pages/BusinessProfile";
import { Payment } from "./components/Payment";
import { OnlinePayment } from "components/Payment/OnlinePayment";
import { OfflinePayment } from "components/Payment/OfflinePayment";
// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: "#2984FF",
    },
    secondary: {
      main: "#00B4D8",
    },
    tertiary: {
      main: "#90E0EF",
    },
  },
});

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserData(await getUserData(user.uid));
      } else {
        setUserData(null);
      }
    });
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header userData={userData} />
          <div style={{ position: "fixed", top: "50px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />}></Route>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin" element={<Admin userData={userData} />} />
              <Route path="/home" element={<Home userData={userData} />} />
              <Route
                path="/profile"
                element={<Profile userData={userData} />}
              />
              <Route path="/cancelled-order" element={<CancelledOrder />} />
              <Route
                path="/cancelled-order/single-tour"
                element={<SingleTour />}
              />
              <Route
                path="/cancelled-order/single-tour/:orderID"
                element={<OrderDetail />}
              />

              <Route path="/order" element={<CustomerOrder />} />
              <Route
                path="/profile/business"
                element={<BusinessProfile userData={userData} />}
              />
              <Route path="/tourdetail" element={<TourDetails />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/online-payment" element={<OnlinePayment />} />
              <Route path="/offline-payment" element={<OfflinePayment />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
