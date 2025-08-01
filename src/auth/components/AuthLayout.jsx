import { Link } from "react-router-dom";

export default function AuthLayout({ children, title, 
    subtitle, footerText, footerLink, footerLinkText }){
        return (
            <div className="auth-layout">
                <div className="auth-container">
                    <div className="auth-header">
                        <h1 className="auth-title">{title}</h1>
                        <p className="auth-subtitle">{subtitle}</p>
                    </div>

                    <div className="auth-content">
                        {children}
                    </div>

                    <div className="auth-footer">
                        <p>
                            {footerText} <Link to={footerLink} className="auth-link">
                            {footerLinkText}</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }