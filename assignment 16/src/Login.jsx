import { useRef } from "react";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        alert("Login Successful!");
    }

    return (
        <div>
            <h1>User Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    ref={emailRef}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter Password"
                    ref={passwordRef}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;