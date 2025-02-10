
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    photo: "",
    fullname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.fullname]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);
  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(formData.email)) {
      return setError("Invalid email format");
    }
    if (!validateMobile(formData.mobile)) {
      return setError("Mobile number must be 10 digits");
    }
    if (!validatePassword(formData.password)) {
      return setError("Password must be at least 6 characters");
    }
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    localStorage.setItem("user", JSON.stringify(formData));
    router.push("/profile");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-lg font-semibold">Profile Photo</label>
          <input
            type="file"
            name="photo"
            onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
            className="w-full p-2 border rounded-md mb-4"
          />
          <label className="block mb-2 text-lg font-semibold">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <label className="block mb-2 text-lg font-semibold">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <label className="block mb-2 text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <label className="block mb-2 text-lg font-semibold">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <label className="block mb-2 text-lg font-semibold">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
            <label className="ml-2 text-gray-700">Show Password</label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
