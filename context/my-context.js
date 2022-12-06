import { createContext, useEffect, useState } from 'react';

const MenuContext = createContext()

export const ClickProvider = (props) => {
    const [menuEnterPage, setMenuEnterPage] = useState('xd');

    useEffect(() => {
        fetch
    }, [])
    return (
        <MenuContext.Provider value={[menuEnterPage]} {...props}></MenuContext.Provider>
    );
};

export default MenuContext;