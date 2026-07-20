import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { githubLogin } from "../../api/auth.api";

export default function GithubCallback() {

    const navigate = useNavigate();

    useEffect(() => {

    console.log("GithubCallback Mounted");

    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");

    console.log("Code:", code);

}, []);


    useEffect(() => {

        const params = new URLSearchParams(window.location.search);

        const code = params.get("code");

        if (!code) {

            navigate("/login");

            return;

        }

        (async () => {

            try{

                const response = await githubLogin(code);

                localStorage.setItem(

                    "token",

                    response.data.token

                );

                navigate("/dashboard");

            }

            catch{

                navigate("/login");

            }

        })();

    },[]);

    return <p>Signing in with GitHub...</p>;

}