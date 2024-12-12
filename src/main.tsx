import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import { TicketApp } from './TicketApp.tsx';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <TicketApp />
    </React.StrictMode>
);
