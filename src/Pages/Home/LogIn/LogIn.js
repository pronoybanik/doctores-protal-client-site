import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../component/Contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useHooks';


const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');

    const [loginUSerEmail, setLoginUSerEmail] = useState('')
    const [token] = useToken(loginUSerEmail)
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true })

    }


    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUSerEmail(data.email);
            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message)

            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className='w-full' type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-800'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">PassWord</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "password is required",
                                minLength: { value: 6, message: 'password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                        {errors.password && <p className='text-red-800'>{errors.password?.message}</p>}
                    </div>
                    <div>
                        {loginError && <p className='text-red-600 my-2'>{loginError}</p>}
                    </div>
                    <input className='btn w-full' value='Log In' type="submit" />
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to='/signup'>Create a accounts</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className="btn btn-outline w-full">Google LogIn</button>

            </div>


        </div>
    );
};


export default LogIn;