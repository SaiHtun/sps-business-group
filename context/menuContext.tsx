import React, { createContext, useContext, useState } from "react";

export const MenuContext = createContext(null);

const MenuContextProvider: React.FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;

export const useMenu = () => useContext(MenuContext);
