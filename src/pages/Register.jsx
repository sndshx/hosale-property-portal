import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Signup logic goes here
    alert(`Registered user: ${name} (${email})`);
  };

  return (
    <PageTransition>
      <div className="auth__container">
        {/* Banner Column */}
        <div className="auth__banner">
          <div className="auth__banner__content">
            <Link to="/" className="auth__logo">Hosale<span>.</span></Link>
            <h2>Unlock Premium Listings</h2>
            <p>
              Register today to access exclusive properties, schedule direct visits, and get alerts for price drops.
            </p>
            <div className="auth__features">
              <div>
                <i className="ri-checkbox-circle-fill"></i>
                <span>Early Access to New Listings</span>
              </div>
              <div>
                <i className="ri-checkbox-circle-fill"></i>
                <span>Direct Chat with Verified Sellers</span>
              </div>
              <div>
                <i className="ri-checkbox-circle-fill"></i>
                <span>Personalized Search Recommendations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="auth__content">
          <div className="auth__card">
            <h3>Create Account</h3>
            <p className="auth__subtitle">Get started with Hosale in just a few minutes.</p>

            <form onSubmit={handleSubmit}>
              <div className="form__group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Full Name</label>
                <div className="auth__input__wrapper">
                  <i className="ri-user-line"></i>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form__group" style={{ marginBottom: '1rem' }}>
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

              <div className="form__group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="password">Password</label>
                <div className="auth__input__wrapper">
                  <i className="ri-lock-line"></i>
                  <input
                    id="password"
                    type="password"
                    placeholder="Create password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form__group" style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="auth__input__wrapper">
                  <i className="ri-lock-check-line"></i>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Repeat password..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth__options" style={{ marginBottom: '1.5rem' }}>
                <label className="auth__checkbox__container" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 500 }}>
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                  />
                  <span style={{ lineHeight: '1.3' }}>
                    I agree to the <a href="#" className="auth__forgot__link" onClick={(e) => e.preventDefault()}>Terms of Service</a> &amp; <a href="#" className="auth__forgot__link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
                  </span>
                </label>
              </div>

              <button className="btn auth__btn" type="submit">Register Account</button>
            </form>

            <div className="auth__divider">
              <span>Or Register With</span>
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
              Already have an account? <Link to="/login">Sign In Here</Link>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Register;
