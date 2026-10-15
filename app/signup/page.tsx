
"use client";

import { useState } from "react";
import Link from "next/link";

const Page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const res = await fetch("https://practice.amirm.me/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const result = await res.json();
        console.log(result);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">

            <div className=" w-150 h-100 bg-white p-8 rounded-2xl">

                <h1 className="text-4xl  text-[#19263b] text-center mb-3"> Sign Up </h1>

                <p className="text-center mb-8"> Create your account </p>

                <div className="flex flex-col gap-5">

                    <div className="flex flex-col gap-2">


                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Enter username"
                            className=" h-12 px-4 border border rounded-lg" />
                    </div>

                    <div className="flex flex-col gap-2">

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter password"
                            className=" h-12 px-4 border border rounded-lg" />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className=" h-12 bg-red-600 text-white rounded-lg hover:bg-red-700  cursor-pointer"                    >
                        Sign Up
                    </button>

                </div>

                <p className="text-center ">
                    Have an account?{" "}
                    <Link
                        href="/"
                        className="text-red-600 ">
                        Sign In
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Page;
