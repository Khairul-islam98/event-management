import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn, signInGoogle, signInGithub } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
            .then(() => {
                toast.success('Logged successful!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => toast.error("An error occurred while logging in."))
            
    }
    const handleGoogleSingIn = () => {
        signInGoogle()
            .then(() => {
                toast.success('successful!')
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(() => toast.error("Can't sign in to your Account"))
    }
    const handleGithubSingIn = () => {
        signInGithub()
            .then(() => {
                toast.success('successful!')
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(() => toast.error("Can't sign in to your Account"))
    }

    return (
        <div className="mx-auto max-w-xl border rounded-xl mb-10 mt-10">
            <div>
                <h2 className="text-2xl my-3 text-center">Please Login</h2>

                <form onSubmit={handleLogin} className='md:w-3/4 lg:w-3/4 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="middle none center w-full rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true">Login</button>
                    </div>
                </form>
                <p className='text-center py-5'>Don't have an account <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
            </div>
            <p className='flex justify-center items-center gap-2'>
                <button onClick={handleGoogleSingIn} className='btn bg-pink-500 text-white'>Google</button>
                <button onClick={handleGithubSingIn} className='btn bg-pink-500 text-white'>Github</button>
            </p>
        </div>
    );
};

export default Login;