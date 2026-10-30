
export default function ProductSkeleton() {
  return (
    <div
      className="w-full max-w-sm rounded-2xl border
                 border-white/10 bg-[#15161b] p-4
                 shadow-xl animate-pulse"
    >
      {/* Image Skeleton */}
      <div className="mb-4 h-52 rounded-xl bg-[#252730]" />

      {/* Product Title */}
      <div className="space-y-2">
        <div className="h-4 w-4/5 rounded-md bg-[#30323b]" />
      </div>

      {/* Price and Stock */}
      <div className="mt-4 flex items-center justify-between">
        <div className="h-6 w-20 rounded-md bg-[#30323b]" />
        <div className="h-3 w-16 rounded-md bg-[#30323b]" />
      </div>

      {/* Quantity and Add to Cart */}
      <div className="mt-5 flex items-center gap-3">
        <div className="h-11 w-28 rounded-lg bg-[#252730]" />
        <div className="h-11 flex-1 rounded-lg bg-[#30323b]" />
      </div>
    </div>
  );
}
