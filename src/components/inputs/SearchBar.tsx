import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  className,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(query)
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-60"
      />
      <Button variant="outline" onClick={handleSearch} aria-label="Search">
        <Search className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SearchBar;
