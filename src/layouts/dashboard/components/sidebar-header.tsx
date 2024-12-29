import clsx from "clsx";
import { ShieldCheck } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="flex items-center gap-4 p-4 border-b">
      <div
        className={clsx(
          "h-10 w-10 flex items-center justify-center rounded-full bg-blue-700 text-white font-semibold"
        )}
      >
        <ShieldCheck className="h-5 w-5" />
      </div>
      <p className="text-lg font-medium">U Kyaw Sein POS</p>
    </div>
  );
};

export default SidebarHeader;
