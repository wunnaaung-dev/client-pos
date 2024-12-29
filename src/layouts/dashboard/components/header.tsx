import UserAvatar from "./avatar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 p-4 flex items-center justify-between shadow-lg bg-white h-[64px]">
      <h1 className="text-lg font-semibold">U Kyaw Sein POS</h1>
      <div className="flex items-center gap-4">
        {/* <button className="p-2 rounded-md hover:bg-blue-600 text-white bg-blue-500">
          Quick Action
        </button> */}
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
