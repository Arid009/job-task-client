import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome to Task Manager</h1>
                        
                        <Link to='/task'><button className="btn btn-primary">Let's Begin</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;