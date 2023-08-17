import { useState } from "react";
import { Input } from "antd";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search">
      <Input
        value={searchQuery}
        type="text"
        placeholder="Search food..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
