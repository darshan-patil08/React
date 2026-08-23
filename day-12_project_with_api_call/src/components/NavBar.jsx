const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="bg-white rounded p-5 flex items-center justify-between">
      <div className="text-black">logo</div>

      <div className="flex gap-10 text-xl">
        <p
          onClick={() => setIsCartOpen(false)}
          className="cursor-pointer text-black"
        >
          Home
        </p>

        <p
          onClick={() => setIsCartOpen(true)}
          className="cursor-pointer    text-black"
        >
          Cart
        </p>
      </div>
      <button className="bg-black text-white p-2 rounded-md">Login</button>
    </div>
  );
};

export default Navbar;
