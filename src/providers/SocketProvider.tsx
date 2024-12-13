import { ReactNode } from "react";
import { SocketContext } from "../context/SocketContext";
import { useSocket } from "../hooks/useSocket";

export const SocketProvider = ({ children: Component }: { children: ReactNode }) => {
    // "undefined" means the URL will be computed from the `window.location` object
    const { socket, isOnline } = useSocket(import.meta.env.VITE_APP_NODE_ENVIRONMENT === "production" ? undefined : `localhost:${import.meta.env.VITE_APP_SOCKET_SERVER_PORT}`);

    return (
        <SocketContext.Provider value={{ socket, isOnline }}>
            {Component}
        </SocketContext.Provider>
    )
}