export const authUser = (role) => {
    const token = localStorage.getItem("token");
    if (token) {
        const [header, payload, signature] = token.split(".");
        const decodedPayload = JSON.parse(atob(payload));
        const userRole = decodedPayload.role;

        if (userRole === role) {
            return true;
        }
    }
    return false;
};

export const userAuthenticated = () => {
    if (localStorage.getItem("token")) {
        return true;
    }
    return false;
};

export const adminRoutes = () => {
    return authUser("ADMIN_ROLE");
}

export const clientRoutes = () => {
    return authUser("CLIENT_ROLE");
}