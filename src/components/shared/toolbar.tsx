interface ToolbarProps {
  children: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-start w-full py-3 rounded-md h-max">
      {children}
    </div>
  );
};

export default Toolbar;
