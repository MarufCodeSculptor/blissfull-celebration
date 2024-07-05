import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/CredProvider';
import { updateProfile } from 'firebase/auth';
import Loading from '../Loadng/Loading';
import toast from 'react-hot-toast';
import useTittle from '../../Hooks/useTitle/useTittle';

const Register = () => {
  useTittle('(Register) -Blissfull_celebration')
  const {
    signInWithGoogle,
    SignUpWithEmailPass,
    setUser,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return <Loading />;
  }
  // handling register => =>
  const handleRegister = async e => {
    e.preventDefault();
    setLoading(true);

    console.log('handle button is working fine ');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photourl = form.photo.value;

    try {
      const { user } = await SignUpWithEmailPass(email, password);
      await updateProfile(user, {
        displayName: name,
        photoURL: photourl,
      });
      await setUser({ ...user, displayName: name, photoURL: photourl });
      navigate('/');
      toast.success('Register Success');


    } catch (err) {
      console.log(err);
    }
  };

  // handle google signIn  =>

  const handleGoogleSignIn = async () => {
    try {
     await signInWithGoogle();
     navigate('/')
     toast.success('SignIn Success'); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-col-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body ">
            <h2 className="text-xl font-bold capitalize text-center">
              {' '}
              Register here{' '}
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                //  required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                //  required
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
                //  required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text"> Photo Url</span>
              </label>

              <input
                type="text"
                name="photo"
                placeholder=" Photo URL "
                className="input input-bordered"
                //  required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary"> Register</button>
            </div>

            <div>
              <button onClick={handleGoogleSignIn}>
                {' '}
                sign In with google{' '}
              </button>
            </div>

            <Link to="/login" className="text-sm p-2 link ">
              Already have an account ? please login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
