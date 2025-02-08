// pages/profile.js
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    // Simulate fetching user details (Replace with actual authentication logic)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFormData({ name: storedUser.name, email: storedUser.email });
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setUser(formData);
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96 mx-auto">
        {isEditing ? (
          <>
            <label className="block mb-2 text-lg font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            />
            <label className="block mb-2 text-lg font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md mb-4"
            />
            <button
              onClick={handleSave}
              className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold">Name: <span className="text-gray-700">{user.name}</span></p>
            <p className="text-lg font-semibold mt-2">Email: <span className="text-gray-700">{user.email}</span></p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md font-semibold hover:bg-gray-700 transition"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
