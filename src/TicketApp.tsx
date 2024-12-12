import { UiProvider } from './providers/UiProvider.tsx';
import { AppRouter } from './routes/AppRouter.tsx';

export const TicketApp = () => {
    return (
        <>
            <UiProvider>
                <AppRouter />
            </UiProvider>
        </>
    )
}
