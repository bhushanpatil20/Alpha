export const useGoogleAuth = (onSuccess) => {

    const handleGoogleLogin = () => {

        window.google.accounts.id.initialize({

            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,

            callback: (response) => {

                onSuccess(response.credential);

            }

        });

        window.google.accounts.id.prompt();

    };

    return handleGoogleLogin;

};