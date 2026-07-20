import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function GithubCallback() {

    const { githubLogin } = useAuth();

    const navigate = useNavigate();

    const hasRun = useRef(false);

useEffect(() => {

    if (hasRun.current) return;
    hasRun.current = true;

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
        navigate("/login");
        return;
    }

    (async () => {
    try {

        await githubLogin(code);

        navigate("/dashboard", { replace: true });

    } catch (error) {

        console.error(error);

        navigate("/login", { replace: true });

    }
})();

}, []);

    return <p>Signing in with GitHub...</p>;

}