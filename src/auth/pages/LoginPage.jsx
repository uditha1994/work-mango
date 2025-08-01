import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="SignIn to your Account to 
            continue your job search or post jobs"
            footerLink="/regitser"
            footerText="Don't have an account"
            footerLinkText="Sign Up"
        >
            <LoginForm />
        </AuthLayout>
    )
}