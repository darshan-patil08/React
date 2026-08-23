import { useContext } from "react";
import { MyContext } from "../context/MyContext";


const ProductsCard = ({ product, isInCart }) => {
  const { rate, count } = product.rating;

  let { setCartItems, incrementQuantity, decrementQuantity } = useContext(MyContext);
  const handleAddToCart = () => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    alert(`${product.title} has been added to the cart!`);
  };




  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mt-1 line-clamp-2 min-h-12 text-base font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <span className="text-sm">★</span>
            <span className="text-sm font-semibold text-gray-800">
              {rate}
              stars
            </span>
          </div>

          <span className="text-xs text-gray-400">({count} reviews)</span>
        </div>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          {isInCart ? (
            <div className="flex items-center gap-2">
              <button onClick={() => incrementQuantity(product.id)} className="rounded-lg hover:bg-green-300 bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition ">
                <span >+</span>
              </button>
                <span className="flex h-8 w-8 text-black items-center justify-center border-x border-gray-200 text-sm font-medium">
                  {isInCart.quantity}
                </span>
              <button onClick={() => decrementQuantity(product.id)} className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-red-300">
                <span>-</span>
              </button>
            </div>
          ) : (
            <button
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
