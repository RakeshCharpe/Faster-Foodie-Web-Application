import { useEffect, useState } from "react";
 //check if the user is online or offline
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

         window.addEventListener("online", () => {
           setOnlineStatus(true);
         });
        
    },[])
   

    //Boolean value
    return ( onlineStatus );
}

export default useOnlineStatus;