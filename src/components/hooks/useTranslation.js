import React, {useEffect, useState} from 'react'


const useTranslation = () => {
    const [translations,setTranslations] = useState([])

   const  getJsonData = async (lng) => {
       await fetch(`${process.env.PUBLIC_URL}/translations/${lng}.json`)
            .then(res => res.json())
            .then((val) => {
                setTranslations(val)
            })
            .catch((err) => console.log(err))
    }
    useEffect(()=>{
        if(localStorage.getItem("language")){
            getJsonData(localStorage.getItem("language"))
        }
    },[])



    return {
        getJsonData,
        // getTranslationByKey,
        translations,
    }
}


export default useTranslation