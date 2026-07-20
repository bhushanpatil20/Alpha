import { useEffect, useRef } from "react";

export const useGoogleAuth = (onSuccess) => {

    const buttonRef = useRef(null);

    useEffect(() => {

        if (!window.google || !buttonRef.current) return;

        window.google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: (response) => {
                onSuccess(response.credential);
            }
        });

        window.google.accounts.id.renderButton(
            buttonRef.current,
            {
                theme: "outline",
                size: "large",
                shape: "pill",
                width: "100%"
            }
        );

    }, [onSuccess]);

    return buttonRef;
};