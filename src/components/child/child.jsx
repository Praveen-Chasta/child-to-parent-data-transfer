import {useState, useEffect} from 'react';

function child ({handelPara}) {

    const [data, setData] = useState()
    const [debounceData, setDebounceData] = useState(null)

    useEffect(() => {

        if(debounceData){
            clearInterval(debounceData)
        }

        let timer = setInterval(() => {
            handelPara(data)
        },300)
        
        setDebounceData(timer)

        return () => clearInterval(timer)
    },[data, handelPara])

    const handelParaValue = (event) => {
    setData(event.target.value)
    }

    return(
        <>
            <input onChange = {handelParaValue} />
        </>
    )
}

export default child