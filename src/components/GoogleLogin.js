import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const clientId = "796379152026-krfh88l35rs5ihljcrj6v489ajrgl47r.apps.googleusercontent.com";

function GLogin() {
    const navigate = useNavigate();

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        navigate(`/Menu`, { replace: true });
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default GLogin;