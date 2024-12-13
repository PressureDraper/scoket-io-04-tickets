import { createContext } from "react";
import { PropsSocketContext } from "../interfaces/ISocket";

export const SocketContext = createContext<PropsSocketContext>({ isOnline: false, socket: null });