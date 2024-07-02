import { useContext } from 'react';
import { AuthContext } from '../../Provider/CredProvider';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loadng/Loading';
import toast from 'react-hot-toast';

const Login = () => {
  const { signInWithGoogle, loginWithEmailPass, loading, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await loginWithEmailPass(email, password);
      navigate('/');
      toast.success('Login Success');
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
      toast.success('Sign In  Success');
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-col-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body ">
            <h2 className="text-xl font-bold capitalize text-center">
              login here
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div>
              <button onClick={handleGoogleSignIn}>sign In with google</button>
            </div>

            <Link to="/register" className="text-sm p-2 link ">
              Not signed ? please register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
