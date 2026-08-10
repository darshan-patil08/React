

const User = ({ 
  user = {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80"
  } 
}) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 flex flex-col items-center text-center">
      
      {/* Centered Avatar */}
      <img
        src={user.avatar}
        alt={`${user.name}'s profile`}
        className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500/20 shadow-sm mb-4"
      />

      {/* Bottom Details Section */}
      <div className="w-full pt-2 border-t border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
          {user.name}
        </h3>
        <p className="text-sm text-gray-500 truncate mt-0.5">
          {user.email}
        </p>
      </div>

    </div>
  );
};

export default User;