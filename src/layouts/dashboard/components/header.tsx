import { NavLink } from "react-router-dom";
import UserAvatar from "./avatar";

const Header = () => {
  return (
    <header className="w-full sticky p-4 flex items-center justify-between shadow-lg bg-white h-[64px]">
      <h1 className="text-lg font-semibold">U Kyaw Sein POS</h1>
      <div className="flex justify-between items-center gap-4">
        <NavLink to="/pos">POS</NavLink>
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
