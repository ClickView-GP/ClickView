"use client";

import colors from "@/app/lab/colors";
import Image from "next/image";
import { useState } from "react";
import { User } from "lucide-react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    firstName: "Helmi",
    lastName: "Nofal",
    email: "HelmiNofal@gmail.com",
    image: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [passwordErrors, setPasswordErrors] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [updateMessage, setUpdateMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
    setPasswordErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleUpdatePassword = async () => {
    let errors = {};
    if (!passwords.current) errors.current = "Current password is required.";
    if (!passwords.new) errors.new = "New password is required.";
    else if (passwords.new.length < 8) errors.new = "Password must be at least 8 characters.";
    if (!passwords.confirm) errors.confirm = "Please confirm your new password.";
    else if (passwords.new !== passwords.confirm) errors.confirm = "Passwords do not match.";

    setPasswordErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      const response = await fetch("/api/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: passwords.current,
          newPassword: passwords.new,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update password");
      }

      alert("Password updated successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
    } catch (error) {
      alert("Error updating password: " + error.message);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: profile.firstName,
          lastName: profile.lastName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      setUpdateMessage({ type: "success", text: "Profile updated successfully." });
    } catch (error) {
      setUpdateMessage({ type: "error", text: "Error updating profile: " + error.message });
    }
  };

  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor: colors.backgroundAlt }}
    >
      <main className="flex-1 p-8">
        <h1
          className="text-2xl font-Poppins mb-6"
          style={{ color: colors.primary }}
        >
          Settings
        </h1>

        <div
          className="p-6 rounded-xl shadow-md border border-[#1F2937] mb-8"
          style={{ backgroundColor: colors.background }}
        >
          <h2
            className="text-xl font-medium mb-2 font-Poppins"
            style={{ color: colors.primary }}
          >
            Personal Information
          </h2>
          <p
            className="text-sm mb-4 font-Poppins"
            style={{ color: colors.primary }}
          >
            Manage your profile
          </p>

          <div className="flex items-start mb-4 space-x-4">
            {profile.image ? (
              <Image
                src={profile.image}
                alt="User Profile"
                width={100}
                height={100}
                className="rounded-full"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="text-gray-500 w-8 h-8" />
              </div>
            )}

            <div
              className="flex space-x-4 font-Poppins"
              style={{ color: colors.primary }}
            >
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-3">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  className="border p-2 rounded-xl w-40 text-center hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium mb-3">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  className="border p-2 rounded-xl w-40 text-center hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
                />
              </div>
            </div>
          </div>

          <input
            type="email"
            name="email"
            value={profile.email}
            readOnly
            className="border  p-2 rounded-xl w-83 mb-4 ml-25 bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700 mx-auto"
          />

          <div className="flex justify-end">
            <button
              onClick={handleUpdateProfile}
              className="px-4 py-2 rounded cursor-pointer"
              style={{
                backgroundColor: colors.secondary,
                color: colors.text.muted,
              }}
            >
              Update
            </button>
          </div>

          {updateMessage && (
            <p
              className={`mt-2 text-sm font-Poppins ${
                updateMessage.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {updateMessage.text}
            </p>
          )}
        </div>

        {/* Password Section */}
        <div
          className="p-6 rounded-xl shadow-md border border-[#1F2937] mb-8"
          style={{ backgroundColor: colors.background }}
        >
          <h2
            className="text-xl font-medium mb-3 font-Poppins"
            style={{ color: colors.primary }}
          >
            Password
          </h2>
          <p className="text-sm mb-4" style={{ color: colors.primary }}>
            Must at least be 8 characters long
          </p>
          <div className="flex flex-col mb-4" style={{ color: colors.primary }}>
            <label className="text-sm font-medium mb-1 flex items-center space-x-1">
              <span>Current Password</span>
              <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="password"
              name="current"
              className="rounded-xl border p-2 hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
              value={passwords.current}
              onChange={handlePasswordChange}
              required
            />
            {passwordErrors.current && <p className="text-red-500 text-sm mt-1">{passwordErrors.current}</p>}
          </div>

          <div className="flex flex-col mb-4" style={{ color: colors.primary }}>
            <label className="text-sm font-medium mb-1 flex items-center space-x-1">
              <span>New Password</span>
              <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="password"
              name="new"
              className="rounded-xl border p-2 hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
              value={passwords.new}
              onChange={handlePasswordChange}
              required
            />
            {passwordErrors.new && <p className="text-red-500 text-sm mt-1">{passwordErrors.new}</p>}
          </div>

          <div className="flex flex-col mb-4" style={{ color: colors.primary }}>
            <label className="text-sm font-medium mb-1 flex items-center space-x-1">
              <span>Confirm Password</span>
              <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="password"
              name="confirm"
              className="rounded-xl border p-2 hover:bg-gray-50 transition focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-700"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              required
            />
            {passwordErrors.confirm && <p className="text-red-500 text-sm mt-1">{passwordErrors.confirm}</p>}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleUpdatePassword}
              className="px-4 py-2 rounded cursor-pointer"
              style={{
                backgroundColor: colors.secondary,
                color: colors.text.muted,
              }}
            >
              Update
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
