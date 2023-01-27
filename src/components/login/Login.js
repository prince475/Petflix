import React, { useState } from "react";
import "./Login.css"


export default function Login({setToken}) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function handleUsername (e) {
        e.preventDefault()
        setUsername(e.target.value)
    }

    function handlePassword (e) {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const token = {
            username,
            password
        }
        setToken(token)
    }



    return (
        <div className="login-wrapper">
            <h1>Petflix</h1>
            <div className="card">
                <div className="i-left">
                    <div>
                        <img src ="https://ouch-cdn2.icons8.com/Q_OjCVXGw8kIpafKhKOhv4BXE2ovEdo1GQfDJ-S39pE/rs:fit:256:193/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTAz/LzZlMDFkMjc3LTZm/ZmItNGIxNS1iZGRl/LWEyNzdlMzg4NzIx/ZS5wbmc.png" alt="person with dog"/>
                    </div>

                    <div className="i-right">
                    <form onSubmit={handleSubmit}>
                        <p>Login</p>
                            <input 
                            type="text" 
                            onChange={handleUsername}
                            placeholder="Username"
                            
                            />
                            
                            <input 
                            type="password" 
                            onChange={handlePassword}
                            placeholder="Password"
                            
                            />
                    
                        <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
    )
}