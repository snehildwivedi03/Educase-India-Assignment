// src/components/BottomNav.jsx
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const pages = ["/", "/login", "/signup", "/profile"];

export default function BottomNav() {
  const { pathname } = useLocation();
  const idx = Math.max(0, pages.indexOf(pathname));

  const prev = pages[(idx - 1 + pages.length) % pages.length];
  const next = pages[(idx + 1) % pages.length];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-sm">
      <div className="flex items-center justify-center gap-6 text-gray-600 text-sm">
        {/* Home icon */}
        <Link to="/" className="text-lg hover:text-purple-600">
          <FaHome />
        </Link>

        <div className="flex items-center gap-3 text-gray-700 font-medium">
          <Link to={prev} className="hover:text-purple-600">
            <FaChevronLeft />
          </Link>

          <span>
            {idx + 1} of {pages.length}
          </span>

          <Link to={next} className="hover:text-purple-600">
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
