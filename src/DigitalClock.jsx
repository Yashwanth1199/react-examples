import React,{useState,useEffect} from "react";
//function based component
function DigitalClock(){
    const [time,setTime]=useState(new Date());
    //setting interval once the component is mounted using react-hook(useEffect)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000)
        //clearing the interval to save the memory
        return()=>{
            clearInterval(interval);
        }
    },[])
    //formatting time and returning a template string
    function timeFormat(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        let meridiem=hours>=12? "PM":"AM";
        hours=hours%12||12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    //creating and concatenating 0 for single digit hours/minutes/seconds
    function padZero(number){
        return (number<10? "0":"")+number;
    }
    
    return( <div className="clock-container">
                <div className="clock">
                    <span>{//calling the timeformat() function for returning us the time
                            timeFormat()
                        }</span>
                </div>
            </div>);
}

export default DigitalClock;