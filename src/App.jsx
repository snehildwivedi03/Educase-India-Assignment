import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingScreen from "./pages/LandingScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ProfileScreen from "./pages/ProfileScreen";
import BottomNav from "./components/BottomNav";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Mobile card */}
      <div className="w-full max-w-sm bg-gray-50 min-h-[90vh] rounded-xl shadow-md flex flex-col overflow-hidden">
        {/* Animated routes live INSIDE the card */}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex-1 flex p-6 overflow-hidden"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Bottom nav OUTSIDE the card, same width */}
      <div className="w-full max-w-sm mt-4 mb-6">
        <BottomNav />
      </div>
    </div>
  );
}
