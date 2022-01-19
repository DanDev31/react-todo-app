import React, { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue){


    const [ item, setItem ] = useState(initialValue);
    const [ loading, setLoading ] = useState(true);
    const [error, setError] = useState(false)
  
  
    useEffect(() => {
  
      setTimeout(() => {
  
        try{
          //creating a Local Storage to save the data in the browser
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else{
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
  
        } catch{
          setError(error)
        }
  
      }, 1000)
  
    })
  
  
    //Function to save in local storage the action of complete and delete Items (Update our state with local storage)
  
    const saveItem = (newItem) =>{
      try{
  
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem)
  
      }catch{
        setError(error)
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  
  }

  
  export { useLocalStorage }