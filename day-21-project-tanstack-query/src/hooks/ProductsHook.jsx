import { useQuery } from "@tanstack/react-query";
import { fetchProductsApi } from "../api/ProductsDataApi";
import { useState, useMemo } from "react";

// Base hook for fetching products via TanStack Query
export const useProductApi = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsApi,
    staleTime: 10000, // 10 seconds
  });
};

// Hook managing product listing, search, and category filter
export const useProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: products = [], isPending, isError, error } = useProductApi();

  // Derived filtered products list — updates automatically on search or category changes
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase().trim());

      const matchesCategory = selectedCategory
        ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return {
    products,
    filteredProducts,
    isPending,
    isError,
    error,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  };
};
