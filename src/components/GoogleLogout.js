import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const clientId = "796379152026-krfh88l35rs5ihljcrj6v489ajrgl47r.apps.googleusercontent.com";

function GLogout() {
    const navigate = useNavigate();

    const onSuccess = (res) => {
        alert('Logout made successfully');
        navigate(`/`, { replace: true });
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default GLogout;