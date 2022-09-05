import { useState } from 'react';
import signUp from '@api/signupService';
import { useApi } from '@hooks/useApi';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const postSignUpApi = useApi(signUp);

    const handleSignupOnClick = () => {
        postSignUpApi.request({ email, password });
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleSignupOnClick}>Sign up</button>
        </div>
    );
};

export default SignUp;
