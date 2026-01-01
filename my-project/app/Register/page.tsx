import React from "react";

const Register = () => {
    return (
        <div
            className="min-h-screen flex flex-col gap-8 justify-center items-center
                        bg-linear-to-tr from-black via-violet-800 to-purple-800
                        px-4"
        >
            <form
                className="flex flex-col gap-5 p-8 
                            bg-white/15 backdrop-blur-md
                            rounded-3xl w-full max-w-md
                            shadow-xl shadow-purple-500/30"
            >
                <h1 className="text-3xl font-semibold text-center">
                    Registration form
                </h1>

                <section className="text-sm text-white/80 text-center">
                    Must fill up the following data to proceed
                </section>

                {/* First & Last name */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex flex-col gap-1 flex-1">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Enter your First Name"
                            className="p-2 rounded-md"
                        />
                    </div>

                    <div className="flex flex-col gap-1 flex-1">
                        <label htmlFor="lastname">Last name</label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Enter your Surname"
                            className="p-2 rounded-md"
                        />
                    </div>
                </div>

                {/* DOB */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name="dob" className="p-2 rounded-md" />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter username@gmail.com"
                        className="p-2 rounded-md"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create your Password"
                        className="p-2 rounded-md"
                    />
                </div>

                <button className="mt-3 bg-purple-600 hover:bg-purple-700 p-3 rounded-md transition">
                    Submit
                </button>
            </form>

            <div className="flex flex-col items-center gap-3">
                <span className="text-sm text-white/80">Already have an account?</span>
                <a
                    href="/Login"
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md transition"
                >
                    Sign in
                </a>
            </div>
        </div>
    );
};

export default Register;
