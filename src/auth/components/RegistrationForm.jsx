import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('')
const [name, setName] = useState('');
const [userType, setUserType] = useState('applicant');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false)
const [showPassword, setShowPassword] = useState(false)
const {register, loginWithGoogle} = useAuth();
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
        return setError('Password do not match')
    }

    try {
        setError('')
        setLoading()
        await register(email, password)
        navigate('/profile-setup', {state: {name, userType}});

    } catch (err) {
        setError('Failed to create an account'+ err.message)
        console.error(err)
    }
    setLoading(false);
};

const handleGoogleLogin = async () => {
    try {
        setError('')
        setLoading(true)
        await loginWithGoogle()
        navigate('/profile-setup')
    } catch (err) {
        setError('Failed to register with Google')
        console.error(err)        
    }
    setLoading(false)
};

return(
    <form onSubmit={handleSubmit} className="registration-form">
        {error && <div className="auth-error">{error}</div>}

        <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-group">
                <span className="input-icon"><FaUser /></span>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-group">
                <span className="input-icon"><FaEnvelope/></span>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                />
            </div>
        </div>
    </form>
)