<div className="w-full flex-shrink-0 sm:max-w-2xl bg-base-100 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-white p-6 rounded-md shadow-lg"
          >
            <h1 className="text-black text-center text-4xl mb-6 font-bold">
              Sign Up
            </h1>
            {/* First and Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-black text-lg font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstname", {
                    required: "First Name is required",
                  })}
                  className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
                />
                {errors.firstname && (
                  <span className="text-red-600 mt-1">
                    {errors.firstname.message}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-black text-lg font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastname", {
                    required: "Last Name is required",
                  })}
                  className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
                />
                {errors.lastname && (
                  <span className="text-red-600 mt-1">
                    {errors.lastname.message}
                  </span>
                )}
              </div>
            </div>
            {/* Email and Phone Number */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-black text-lg font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className="border text-black border-gray-300 rounded-md w-full p-3 outline-none"
                />
                {errors.email && (
                  <span className="text-red-600 mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-black text-lg font-semibold mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  country="bd"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  inputProps={{
                    className:
                      "border text-black border-gray-300 rounded-md w-full ps-12 py-3 outline-none",
                  }}
                />
              </div>
            </div>
            {/* Image Upload */}
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Photo Upload
              </label>
              <input
                type="file"
                id="imageInput"
                className="border text-black border-gray-300 rounded-md w-full p-3 outline-none"
              />
            </div>
            {/* Password and Confirm Password */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-black text-lg font-semibold mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                  />
                  <span
                    className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-600 mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-black text-lg font-semibold mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                  />
                  <span
                    className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-600 mt-1">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button className="px-10 rounded-lg py-3 bg-blue-600 text-white font-semibold transition-all duration-300">
                Sign Up
              </button>
            </div>
            <p className="text-center text-black text-[16px] font-medium mt-2">
              Already have an account ?
              <Link to="/login" className="ms-1">
                Login
              </Link>
            </p>
            <p className="text-center text-lg font-bold my-4 text-black">Or</p>
            <SocialLogin />
          </form>
        </div>