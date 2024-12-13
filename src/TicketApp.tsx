import { SocketProvider } from './providers/SocketProvider.tsx';
import { UiProvider } from './providers/UiProvider.tsx';
import { AppRouter } from './routes/AppRouter.tsx';

export const TicketApp = () => {
    return (
        <>
            <SocketProvider>
                <UiProvider>
                    <AppRouter />
                </UiProvider>
            </SocketProvider>
        </>
    )
}
