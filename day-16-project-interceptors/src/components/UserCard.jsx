const UserCard = ({ user }) => {
  const { firstname, lastname } = user.name;
  const { city, street, number, zipcode } = user.address;

  return (
    <div className="w-full max-w-sm rounded-2xl border border-[#12d329eb]/20 bg-[#0c0d0c] p-6 text-white shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#12d329eb] text-xl font-bold text-black">
          {firstname[0].toUpperCase()}
          {lastname[0].toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            {firstname} {lastname}
          </h2>

          <p className="text-sm text-gray-400">
            @{user.username}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-white/10"></div>

      {/* User Info */}
      <div className="space-y-4">

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Email
          </p>
          <p className="mt-1 text-sm text-gray-200">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Phone
          </p>
          <p className="mt-1 text-sm text-gray-200">
            {user.phone}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Address
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-200">
            {number}, {street}, {city}
            <br />
            {zipcode}
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-[#12d329eb]/10 px-3 py-1 text-xs font-medium text-[#12d329eb]">
          User #{user.id}
        </span>

        <button className="rounded-lg border border-[#12d329eb]/40 px-4 py-2 text-sm font-medium text-[#12d329eb] transition hover:bg-[#12d329eb] hover:text-black">
          View Profile
        </button>
      </div>

    </div>
  );
};

export default UserCard;