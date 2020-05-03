import React, { createContext, useState, useContext } from 'react'

const SectionsContext = createContext();

export const SectionsProvider = ({children}) => {
  const [currentSections, setCurrentSections] = useState(" ");

  return (
    <div>
      <SectionsContext.Provider
        value={{
          currentSections, setCurrentSections,
        }}
      >
        {children}
      </SectionsContext.Provider>
    </div>
  );
}

export function useSections(){
  const context = useContext(SectionsContext);
  if(!context) throw new Error("useSections deve ser usado em um SectionsProvider");
  const {currentSections, setCurrentSections} = context;
  return {currentSections, setCurrentSections};
}
