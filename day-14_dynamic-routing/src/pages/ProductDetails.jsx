import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const { rate, count } = singleProduct.rating || {};

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setSingleProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSingleProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  // Loading state
  if (!singleProduct.id) {
    return (
      <div className="max-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Product Card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">

            {/* ================= IMAGE ================= */}
            <div className="flex items-center justify-center bg-gray-50 rounded-xl min-h-100 lg:min-h-137.5">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="w-full h-100 lg:h-125 object-contain p-10 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ================= PRODUCT INFO ================= */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <span className="w-fit px-3 py-1 mb-4 text-sm font-medium capitalize text-indigo-600 bg-indigo-50 rounded-full">
                {singleProduct.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize leading-tight">
                {singleProduct.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">

                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">
                    ★★★★★
                  </span>
                </div>

                <span className="font-semibold text-gray-800">
                  {rate}
                </span>

                <span className="text-gray-500">
                  ({count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${singleProduct.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-gray-600 leading-7 text-base">
                {singleProduct.description}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 my-7"></div>

              {/* Quantity */}
              <div className="flex items-center justify-between mb-6">

                <span className="font-semibold text-gray-800">
                  Quantity
                </span>

                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, prev - 1))
                    }
                    className="w-10 h-10 flex items-center justify-center text-lg font-semibold text-gray-600 hover:bg-gray-100 transition"
                  >
                    −
                  </button>

                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="w-10 h-10 flex items-center justify-center text-lg font-semibold text-gray-600 hover:bg-gray-100 transition"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <button
                  className="
                    py-3.5 px-6
                    rounded-lg
                    bg-gray-900
                    text-white
                    font-semibold
                    hover:bg-gray-800
                    active:scale-[0.98]
                    transition
                  "
                >
                  Add to Cart
                </button>

                <button
                  className="
                    py-3.5 px-6
                    rounded-lg
                    border-2 border-gray-900
                    text-gray-900
                    font-semibold
                    hover:bg-gray-900
                    hover:text-white
                    active:scale-[0.98]
                    transition
                  "
                >
                  Buy Now
                </button>

              </div>

              {/* ================= FEATURES ================= */}
              <div className="mt-8 space-y-5">

                {/* Free Delivery */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    🚚
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Free Delivery
                    </h3>

                    <p className="text-sm text-gray-500">
                      Free shipping on this product
                    </p>
                  </div>
                </div>

                {/* Returns */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    ↩️
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Easy Returns
                    </h3>

                    <p className="text-sm text-gray-500">
                      7 days easy return policy
                    </p>
                  </div>
                </div>

                {/* Secure Payment */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Secure Payment
                    </h3>

                    <p className="text-sm text-gray-500">
                      100% secure payment
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;