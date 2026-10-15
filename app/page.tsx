
"use client";

import { useState } from "react";
import Link from "next/link";

const Page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const data = {
            username,
            password
        };

        fetch("https://practice.amirm.me/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);

                if (result.token) {
                    localStorage.setItem("token", result.token);
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black ">
            <div className="w-150 h-90  bg-white p-8 rounded-xl">

                <h1 className="text-4xl font-bold  text-center mb-8">Sign In</h1>

                <div className="flex flex-col gap-5">
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username"
                        className=" h-12 px-4 border border rounded-lg" />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className=" h-12 px-4 border border rounded-lg"/>

                    <button
                        onClick={handleSubmit}
                        className=" h-12 bg-red-600 text-white rounded-lg hover:bg-red-700  cursor-pointer">
                        Sign In
                    </button>
                </div>

                <p className="text-center text-gray">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-red-600 ">
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Page;
