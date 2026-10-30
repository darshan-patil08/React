const Filters = ({
  searchTerm = "",
  onSearchChange,
  onSearch,
  selectedCategory = "",
  onCategoryChange,
}) => {
  const handleSearch = onSearchChange || onSearch;

  return (
    <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex w-full items-center justify-between gap-4 rounded-xl bg-[#1a1c23] p-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => handleSearch?.(e.target.value)}
          className="w-full bg-transparent text-lg text-white outline-none placeholder:text-gray-500"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => handleSearch?.("")}
            className="cursor-pointer text-xs text-gray-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex w-full items-center justify-end gap-2 whitespace-nowrap md:w-auto">
        <span className="text-sm text-gray-400">Category:</span>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange?.(e.target.value)}
          className="cursor-pointer rounded-xl border border-gray-700 bg-[#1a1c23] p-3 text-white outline-none"
        >
          <option value="">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
