import SignUpForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form"
import './style.scss'

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication