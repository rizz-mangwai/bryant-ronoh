function form(){
    const NameOnChange = (e) =>{ console.log ("Name is", e.target.value);};
   
    const EmailOnChange = (e)=>{ console.log ("Email is", e.target.value);};
   
    const PasswordOnChange = (e)=>{console.log ("Password is", e.target.value);};
    

    const onSubmit = (e) => {
        console.log("submit button clicked");
    };
    return(
        <div>
            <main>
                <div>
                    <label >Name</label>
                </div>
                <div>
                    <input  onChange ={NameOnChange} />
                </div>
            </main>
            <main>
                <div>
                    <label >Email</label>
                </div>
                <div>
                    <input  onChange ={EmailOnChange} />
                </div>
            </main>
            <main >
                <div>
                    <label >Password</label>
                </div>
                <div>
                    <input type="password"  onChange ={PasswordOnChange} />
                </div>
                <div>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </main>
        </div>
    )
}
 export default form;