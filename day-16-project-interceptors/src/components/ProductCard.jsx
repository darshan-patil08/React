const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Product Content */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          {category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-14 text-lg font-bold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-semibold text-gray-800">
              {rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-2xl font-bold text-gray-900">
              ${price}
            </p>
          </div>

          <button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;