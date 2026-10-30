import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import Filters from "../components/Filters";
import { useProduct } from "../hooks/ProductsHook";
import { toast } from "react-toastify";

const ShopPage = () => {
  const {
    filteredProducts,
    isPending,
    isError,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  } = useProduct();

  const handleAddToCart = (product, quantity) => {
    toast.success(`Added ${quantity} × "${product.title}" to cart`);
  };

  return (
    <div className="min-h-screen bg-[#0e0f13] p-6">
      <Filters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <h1 className="mb-6 text-2xl font-bold text-white">Products</h1>

      {isError && (
        <div className="py-12 text-center text-red-400">
          Failed to load products. Please check your connection.
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}

        {!isPending && !isError && filteredProducts.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-400">
            No products found matching &quot;{searchTerm}&quot;.
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
