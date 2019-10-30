import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
    
    useEffect(() => {
        const body = document.querySelector('body');
        const bodyClass = document.createAttribute('class');
        body.setAttributeNode(bodyClass);
        darkMode === true ? bodyClass.value = 'dark-mode' : bodyClass.value = '';
      }, [darkMode])
    
    return [darkMode, setDarkMode]
}