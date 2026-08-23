const CartCard = ({ cartItems }) => {

    console.log( cartItems);
  return (

    <div className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Product Image */}
      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
        <img
          src={cartItems.image}
          alt={cartItems.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {cartItems.category}
        </p>

        <h2 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-900">
          {cartItems.title}
        </h2>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">
            ${cartItems.price}
          </span>

          <span className="text-xs text-gray-400">
            ★ {cartItems.rating.rate}
          </span>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex shrink-0 items-center rounded-lg border border-gray-200">
        <button className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:bg-gray-100">
          −
        </button>

        <span className="flex h-8 w-8 text-black items-center justify-center border-x border-gray-200 text-sm font-medium">
          {cartItems.quantity}
        </span>

        <button className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:bg-gray-100">
          +
        </button>
      </div>

      {/* Total */}
      <div className="hidden w-24 text-right sm:block">
        <p className="text-xs text-gray-400">Total</p>

        <p className="mt-1 font-bold text-gray-900">
          ${cartItems.price.toFixed(2)}
        </p>
      </div>

      {/* Remove */}
      <button
        className="shrink-0 rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        aria-label="Remove product"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartCard;
