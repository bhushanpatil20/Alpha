import "./AuthBackground.css";

function AuthBackground() {
    return (
        <video
            className="auth-video"
            autoPlay
            muted
            loop
            playsInline
        >
            <source
                src="/videos/auth-bg.mp4"
                type="video/mp4"
            />
        </video>
    );
}

export default AuthBackground;