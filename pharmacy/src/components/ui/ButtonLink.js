import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-[#ceff1a] px-4 py-1 rounded-full font-semibold text-xl flex justify-center items-center">
    {children}
  </Link>
);