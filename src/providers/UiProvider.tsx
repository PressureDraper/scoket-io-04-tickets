import { ReactNode, useState } from "react";
import { UiContext } from "../context/UiContext";

export const UiProvider = ({ children: Component }: { children: ReactNode }) => {
    const [showMenu, setHideMenu] = useState<boolean>(false);

    return (
        <UiContext.Provider value={{ showMenu, setHideMenu }}>
            {Component}
        </UiContext.Provider>
    )
}