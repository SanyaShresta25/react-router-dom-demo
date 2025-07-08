import { useEffect, useState } from 'react';
import Meta from '../components/Meta';

const Users = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users/1')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-crystal dark:bg-gray-900">
        <p className="text-lg text-pink-punch dark:text-gray-300">Loading user...</p>
      </div>
    );

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-pink-punch dark:text-gray-400 text-center px-4">
        User not found
      </div>
    );

  return (
    <div className="min-h-screen bg-blue-crystal dark:bg-gray-900 px-4 py-10">
      <Meta
        title="User Profile"
        description="Explore user profile information including personal, company, and crypto details."
      />

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-pink-punch dark:text-white">
          User Profile
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow space-y-6 text-sm sm:text-base text-black dark:text-white break-words">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full border-4 border-pink-punch dark:border-pink-punch"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
              <p className="text-muted dark:text-gray-300 opacity-90">{user.email}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p><strong>Maiden Name:</strong> {user.maidenName}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <p><strong>Birth Date:</strong> {user.birthDate}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
            <p><strong>Height:</strong> {user.height} cm</p>
            <p><strong>Weight:</strong> {user.weight} kg</p>
            <p><strong>Eye Color:</strong> {user.eyeColor}</p>
            <p><strong>Hair:</strong> {user.hair?.color}, {user.hair?.type}</p>
            <p><strong>IP Address:</strong> {user.ip}</p>
            <p><strong>MAC Address:</strong> {user.macAddress}</p>
            <p><strong>University:</strong> {user.university}</p>

            <p>
              <strong>Address:</strong> {user.address?.address}, {user.address?.city}, {user.address?.state} - {user.address?.postalCode}, {user.address?.country}
            </p>

            <p><strong>Company:</strong> {user.company?.name}</p>
            <p><strong>Department:</strong> {user.company?.department}</p>
            <p><strong>Title:</strong> {user.company?.title}</p>

            <p>
              <strong>Company Address:</strong> {user.company?.address?.address}, {user.company?.address?.city}, {user.company?.address?.state} - {user.company?.address?.postalCode}, {user.company?.address?.country}
            </p>

            <div>
              <p className="font-semibold">Bank:</p>
              <ul className="ml-5 list-disc">
                <li><strong>Card Number:</strong> {user.bank?.cardNumber}</li>
                <li><strong>Card Type:</strong> {user.bank?.cardType}</li>
                <li><strong>Card Expiry:</strong> {user.bank?.cardExpire}</li>
                <li><strong>IBAN:</strong> {user.bank?.iban}</li>
                <li><strong>Currency:</strong> {user.bank?.currency}</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Crypto:</p>
              <ul className="ml-5 list-disc">
                <li><strong>Coin:</strong> {user.crypto?.coin}</li>
                <li><strong>Wallet:</strong> {user.crypto?.wallet}</li>
                <li><strong>Network:</strong> {user.crypto?.network}</li>
              </ul>
            </div>

            <p><strong>EIN:</strong> {user.ein}</p>
            <p><strong>SSN:</strong> {user.ssn}</p>
            <p><strong>User Agent:</strong> {user.userAgent}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
