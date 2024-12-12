import { createContext } from 'react'

export const UiContext = createContext<{ 
    showMenu: boolean, 
    setHideMenu: React.Dispatch<React.SetStateAction<boolean>> 
}>({ showMenu: false, setHideMenu: () => { } });
