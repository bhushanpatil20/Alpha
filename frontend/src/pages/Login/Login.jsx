import {AuthLayout, AuthCard} from "../../components/auth/components/index"
import {SocialLogin} from "../../components/auth/components/SocialLogin/SocialLogin"
function Login() {

    return (

        <AuthLayout>

           <AuthCard
    title="Welcome Back"
    subtitle="Sign in to continue to Alpha."
>

    <SocialLogin />

    <AuthDivider />

    <p style={{color:"white"}}>

        Login Form Here

    </p>

</AuthCard>

        </AuthLayout>

    );

}

export default Login;