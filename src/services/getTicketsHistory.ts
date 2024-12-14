export const getTicketsHistory = async () => {
    const response = (await fetch(`http://localhost:${import.meta.env.VITE_APP_SOCKET_SERVER_PORT}/history`)).json();
    return response;
}