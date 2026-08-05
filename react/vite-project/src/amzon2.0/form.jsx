import { useState } from "react";

function form (){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const nameOnChange = (e) => {
        setName(e.target.value);
    };

    const onSubmit = () =>{
        console.log("submit button clicked");
        console.log("name is", name);
        console.log("email is",email)
        console.log("password is",password);
    };
    return(
        <div>
            <main>
                <div>
                    <label >Name</label>
                </div>
                <div>
                    <input onChange={nameOnChange} />
                </div>
            </main>
            <main>
                <div>
                    <label >Email</label>
                </div>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} />
                </div>
            </main>
            <main>
                <div>
                    <label >password</label>
                </div>
                <div>
                    <input type="password"
                    onChange={(e)=> setPassword(e.target.value)} />
                </div>
            </main>
            <main>
                <button onClick={onSubmit}>Submit</button>
            </main>
            {}
            <ul>
                <li>name:{name}</li>
                <li>Email:{email}</li>
                <li>Password:{password}</li>
            </ul>
        </div>
    );
}

export default form;