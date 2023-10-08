import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        if (!/(?=.*[A-Z])/.test(password) ) {
            toast.error("Password must contain at least one capital letter .")
            return
        }else if(!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/.test(password)){
            toast.error("one special character")
            return
        }
        else if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.")
            return
        }

        createUser(email, password)
            .then(result => {
                toast.success('Registration successful!')
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                    
                })
            })
            .catch(() => toast.error("Already registered"))
    }
    return (

        <div className="mx-auto max-w-xl border rounded-xl mb-10 mt-10">
            <div>
                <h2 className="text-2xl my-3 text-center">Register your account</h2>

                <form onSubmit={handleSubmit} className='md:w-3/4 lg:w-1/2 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                            data-ripple-light="true">Register</button>
                    </div>
                </form>
                <p className='text-center py-5'>Already have an account? <Link to='/login' className='text-blue-600 font-bold'>Login</Link></p>
            </div>
            <p className='flex justify-center items-center gap-6'>
                <button className='btn bg-pink-500 text-white'>Google</button>
                <button className='btn bg-pink-500 text-white'>Github</button>
                <button className='btn bg-pink-500 text-white'>Twitter</button>
            </p>
            <div><Toaster /></div>
        </div>
    );
};

export default Register;