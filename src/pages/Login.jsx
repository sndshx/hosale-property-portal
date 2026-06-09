import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Auth logic goes here
    alert(`Logged in with: ${email}`);
  };

  return (
    <PageTransition>
      <div className="auth__container">
        {/* Banner Column */}
        <div className="auth__banner">
          <div className="auth__banner__content">
            <Link to="/" className="auth__logo">Hosale<span>.</span></Link>
            <h2>Find Your Dream Space</h2>
            <p>
              Join over 10,000+ families who found their perfect properties through our verified listings.
            </p>
            <div className="auth__features">
              <div>
                <i className="ri-checkbox-circle-fill"></i>
                <span>100% Verified Properties</span>
              </div>
              <div>
                <i className="ri-checkbox-circle-fill"></i>
                <span>Direct Agent Communication</span>
              </div>
              <div>
                <i className="ri-checkbox-circle-fill"></i>
                <span>No Hidden Brokerage Fees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="auth__content">
          <div className="auth__card">
            <h3>Welcome Back</h3>
            <p className="auth__subtitle">Sign in to manage your saved properties and inquiries.</p>

            <form onSubmit={handleSubmit}>
              <div className="form__group" style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="email">Email Address</label>
                <div className="auth__input__wrapper">
                  <i className="ri-mail-line"></i>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form__group" style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="password">Password</label>
                  <a href="#" className="auth__forgot__link" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
                </div>
                <div className="auth__input__wrapper">
                  <i className="ri-lock-line"></i>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth__options" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <label className="auth__checkbox__container" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 500 }}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember Me</span>
                </label>
              </div>

              <button className="btn auth__btn" type="submit">Sign In</button>
            </form>

            <div className="auth__divider">
              <span>Or Sign In With</span>
            </div>

            <div className="auth__social__grid">
              <button className="auth__social__btn" onClick={(e) => e.preventDefault()}>
                <i className="ri-google-fill" style={{ color: '#ea4335' }}></i>
                <span>Google</span>
              </button>
              <button className="auth__social__btn" onClick={(e) => e.preventDefault()}>
                <i className="ri-facebook-box-fill" style={{ color: '#1877f2' }}></i>
                <span>Facebook</span>
              </button>
            </div>

            <p className="auth__footer">
              Don't have an account? <Link to="/register">Register Here</Link>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
