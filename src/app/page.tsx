'use client'

import { useState } from "react"
import "./login.css"
import { redirect } from "next/navigation";
import authUser from "@/service/auth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authResult, setAuthResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authUser(email, password)) redirect("/tasks");
    else setAuthResult(true);
  }

  return (
    <div className="homePage">
      <form className="loginForm" onSubmit={handleSubmit}>
        <div>Login</div>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Submit</button>
        {authResult && <div className="authResult">Incorrect username and password</div>}
      </form>
    </div>
  )
}
