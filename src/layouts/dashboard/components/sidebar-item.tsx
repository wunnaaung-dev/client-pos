import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: Array<{ name: string; route: string; icon?: React.ReactNode }>;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, path, icon, children }) => {
  const [showChildren, setShowChildren] = useState(false);

  const toggleChildren = () => {
    setShowChildren((prev) => !prev);
  };

  const isActiveModule = (currentPath: string): boolean => {
    return window.location.pathname.startsWith(currentPath);
  };

  if (children && children.length > 0) {
    return (
      <div>
        {/* Parent Menu */}
        <div
          onClick={toggleChildren}
          className={`flex items-center justify-between gap-4 p-3 text-gray-700 hover:bg-slate-200 rounded-md cursor-pointer ${
            isActiveModule(path) ? "bg-blue-200 text-blue-700" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            {icon && <span className="text-xl">{icon}</span>}
            <span className="font-medium">{label}</span>
          </div>
          <span className={`text-sm transition-transform ${showChildren ? "rotate-180" : ""}`}>
            <ChevronDown className="w-4 h-4"/>
          </span>
        </div>

        {/* Child Menus */}
        {showChildren && (
          <div className="flex flex-col gap-2 pl-3">
            {children.map((child) => (
              <NavLink
                key={child.route}
                to={child.route}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-4 p-3 text-blue-700 bg-blue-100 rounded-lg text-sm"
                    : "flex items-center gap-4 p-3 text-gray-700 hover:bg-gray-100 rounded-lg text-sm"
                }
              >
                {child.icon && <span className="">{child.icon}</span>}
                <span className="font-medium">{child.name}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-4 p-3 text-blue-700 bg-blue-100 rounded-md"
          : "flex items-center gap-4 p-3 text-gray-700 hover:bg-gray-100 rounded-md"
      }
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
