import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to Log in, check your credentials');
            console.error(err)
        }
        setLoading(false);
    };

    const handleGoogleLogin = async () => { 
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            navigate('/dashboard')
        } catch (err) {
            setError('Failed to login with google')
            console.error(err);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                    <span className="input-icon"><FaEnvelope /></span>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Enter your email"
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="password" className="form-lable">Password</label>
                <div className="input-group">
                    <span className="input-icon"><FaLock /></span>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="passowrd"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Enter your password"
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className="forgot-password">
                    <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
                </div>
            </div>
            <button
                type="submit"
                className="auth-button primary"
                disabled={loading}
            >
                {loading ? 'Logging in....' : 'Log In'}
            </button>
            <div className="auth-divider">
                <span>OR</span>
            </div>

            <button
                type="button"
                className="auth-button google"
                onClick={handleGoogleLogin}
                disabled={loading}
            >
                <FaGoogle className="google-icon" /> Continue with Google
            </button>

            <div className="auth-footer-mobile">
                <p>Dont't have an account? <Link to="/register" className="auth-link">Sign up</Link></p>
            </div>
        </form>
    )
}