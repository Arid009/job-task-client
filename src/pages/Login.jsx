import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const { logInUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')

            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);

                navigate(location?.state ? location.state : '/')

            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="justify-center flex mt-4">
                            <div className="text-center">
                                <hr className="w-96" />
                                <button onClick={handleGoogle} className="btn mt-3 text-white bg-green-400 hover:bg-green-500">Google <i className="bi bi-google"></i>Login</button>
                            </div>
                        </div>
                        <h2>Do not have an account? <Link to='/register'>Register</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;