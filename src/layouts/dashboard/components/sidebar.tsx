import { Accordion } from "../../../components";
import menus from "../../../configs/menus";
import SidebarItem from "./sidebar-item";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 min-h-screen static flex-shrink-0 flex flex-col gap-2 p-4 border shadow-lg bg-gradient-to-r from-[var(--sidebar-from)] to-[var(--sidebar-to)]">
      <Accordion type="multiple" className="w-full space-y-4">
        {menus.map((menu) => (
          <SidebarItem
            key={menu.route}
            label={menu.name}
            path={menu.route}
            icon={menu.icon}
            children={menu.children}
          />
        ))}
      </Accordion>
    </aside>
  );
};

export default Sidebar;
