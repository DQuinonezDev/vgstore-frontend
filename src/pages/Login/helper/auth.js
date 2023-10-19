export const isUserAuthentated = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token && role) {
        return {
            authenticated: true,
            rol: role,
        };
    }

    return {
        authenticated: false,
        role: null,
    };
};