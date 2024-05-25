import { useState , useEffect } from "react";

const User = (props) => {
    const [count, setCount] = useState(2);

    useEffect(() => {
        getUser();
    },[]);

    async function getUser() {
        const data = await fetch("https://api.github.com/users/USERNAME");
        const json = await data.json;
        console.log(json);
    }
    return (
        <div className="user-card">
            <h2>Name :  Rakesh</h2>
            <h3>Location : Pune</h3>
            <h3> Exp : {count}</h3>
            <h4>Profession : Developer</h4>
            <h4>{props.name}</h4>
        </div>
    );
}

export default User;