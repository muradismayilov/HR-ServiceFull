import { useState,useEffect } from "react"

function useLocalState(defaultValue,key){

    const [value,setvalue] = useState(()=>{

        const localStorageValue = localStorage.getItem(key)

        return localStorageValue !== null ? JSON.parse(localStorageValue):defaultValue;
    }
    )

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))

    },[key,value])
    return [value,setvalue]
}

export {useLocalState}