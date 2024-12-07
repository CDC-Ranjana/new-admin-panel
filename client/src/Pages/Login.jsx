
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toast";
const Login = ({ setIsAuthenticated }) => { // Receive setIsAuthenticated as a prop
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const validateForm = () => {
    // Validation logic remains the same
    if (!email) {
      setEmailErrorMessage("Email is required.");
      toast.error("Email is required.")
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailErrorMessage("Please enter a valid email address.");
      toast.error("Please enter a valid email address.")
      return false;
    }

    if (!password) {
      setEmailErrorMessage("");
      setPasswordErrorMessage("Password is required.");
      toast.error("Password is required.")
      return false;
    }

    if (password.length < 8) {
      setEmailErrorMessage("");
      setPasswordErrorMessage("Password must be at least 8 characters long.");
      toast.error("Password must be at least 8 characters long.")
      return false;
    }

    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Update isAuthenticated state
      setIsAuthenticated(true); // Call setIsAuthenticated here
      // Optionally, you can navigate to a different page if you want
      navigate("/dashboard"); // Uncomment this if you want to navigate
    }
  };

  return (
    <section className="bg-gray-100 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {emailErrorMessage && (
                <div className="text-red-500 text-sm">{emailErrorMessage}</div>
              )}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {passwordErrorMessage && (
                <div className="text-red-500 text-sm">
                  {passwordErrorMessage}
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-[#2563eb] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
