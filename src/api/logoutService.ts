import apiInstance from '@api/api';
import history from '@components/CustomRouter/history';

const logout = async () => {
    try {
        const response = await apiInstance.delete('/auth/logout', {
            data: {
                accessToken: localStorage.getItem('accessToken'),
                refreshToken: localStorage.getItem('refreshToken'),
            },
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    history.replace('/login');
};

export default logout;
