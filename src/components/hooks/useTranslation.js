import React, {useEffect, useState} from 'react'


const useTranslation = () => {
    const [translations,setTranslations] = useState([])
    const handleCLick = async (code) => {
        window.location.reload()
        await localStorage.setItem("language", code)
        await getJsonData(localStorage.getItem("language"))

    }
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
        }else {
            localStorage.setItem('language',"en")
            getJsonData(localStorage.getItem("language"))
        }
    },[])

    const t = (key) =>{

        return (
            translations[key]

        )

    }

    return {
        getJsonData,
        translations,
        handleCLick,
        t,
    }
}


export default useTranslation