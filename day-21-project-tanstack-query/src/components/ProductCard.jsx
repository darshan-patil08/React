import { useState } from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const inStock = Boolean(  product.stock > 0);
  const image = product.thumbnail || product.images?.[0] || "";

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) =>
      product.stock ? Math.min(product.stock, prev + 1) : prev + 1
    );
  };

  const handleAddToCart = () => {
    if (!inStock) return;
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  return (
    <div
      className="flex w-full max-w-sm flex-col justify-between rounded-2xl border
                 border-white/10 bg-[#15161b] p-4 text-white shadow-xl
                 transition hover:border-white/20"
    >
      <div>
        {/* Product image */}
        <div
          className="mb-4 flex h-52 items-center justify-center
                     overflow-hidden rounded-xl bg-[#202127]"
        >
          <img
            src={image}
            alt={product.title}
            className="h-full w-full object-contain p-4
                       transition duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Product information */}
        <h3
          className="truncate text-base font-semibold text-gray-100"
          title={product.title}
        >
          {product.title}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-xl font-bold text-white">
            ${Number(product.price || 0).toFixed(2)}
          </p>

          <span
            className={`text-xs font-medium ${
              inStock ? "text-lime-400" : "text-red-400"
            }`}
          >
            {inStock ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>
      </div>

      {/* Quantity and cart button */}
      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex items-center rounded-lg border
                     border-white/10 bg-[#202127] p-1"
        >
          <button
            type="button"
            onClick={handleDecrease}
            disabled={!inStock || quantity <= 1}
            aria-label="Decrease quantity"
            className="cursor-pointer rounded-md p-2 text-gray-300
                       hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-8 text-center text-sm font-medium">
            {inStock ? quantity : 0}
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            disabled={!inStock || quantity >= product.stock}
            aria-label="Increase quantity"
            className="cursor-pointer rounded-md p-2 text-gray-300
                       hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!inStock}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2
                     rounded-lg bg-lime-400 px-3 py-3
                     text-sm font-semibold text-black
                     transition hover:bg-lime-300
                     disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShoppingCart size={17} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
