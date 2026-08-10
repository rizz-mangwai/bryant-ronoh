import { useEffect, useState } from "react";

function StopWatch(){
    const [isStoped,setIsStoped] = useState(true);
    const [k, setK]= useState(0)

    useEffect(()=>{
        if (isStoped===false){
            setK(k +1);
        }
    },[isStoped]);


    return(
        <div>
            <div>
                <button onClick={()=> setIsStoped(false)}>Start</button>
                <button onClick={()=> setIsStoped(true)}>Stop</button>
            </div>
            <div>start clicked how many times</div>
            <showtimer isStoped={isStoped} k={k} />
        </div>
    );
}
function showTimmer({isStoped,k}){
    if(isStoped){
        return null:
    }
    return<timmer k={k}/>
}
function timmer({k}){
    const [time,setTime] = useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("for k is",k,"time is",time);
            setTime((c)=>c+1);
        },1000);
        return ()=>clearInterval(interval);

    },[]);
    return(
        <div>
            <b>{time}</b>
        </div>
    )
}

export default StopWatch;