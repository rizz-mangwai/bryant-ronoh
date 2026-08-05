function Parent() {
    const str = "hello world";
    const amount = 2000;
    const isOk = true;
    const notSet = null;

    const car = {
        model: "Renault truck",
        manufacturer: "renault",
        engine:{
            cc: 2500,
        },
    };

    const colors = ["blue", "green","yellow"];

    return (
        <div>
            <h1>I am the Parent Component</h1>
            <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
            <Child2
             str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} car={car} colors={colors}
             obj={{name:"", value:""}}/>
            <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet}/> 
        </div>
    );
}

function Child1(props) {
    return (
        <div>
            <h1>Cars Available</h1>
            <ul>
                <li>
                    CarModel: <b>{props.carModel}</b>
                </li>
                <li>
                    Amount: <b>{props.amountInNumber}</b>
                </li>
                <li>
                    isOk: <b>{props.isOk}</b>
                </li>
                <li>
                    isOk <b>{String(props.isOk)}</b>{" "}
                    {/*
                     */
                    }
                </li>
                <li>
                    notSet: <b>{props.notSet}</b> 
                </li>
            </ul>
        </div>
    );
}

function Child2(props){
    const{ str,amountInNumber,isOk,notSet} = props;
    return(
        <div>
            <h1>im child component 2</h1>
            <ul>
                <li>
                    Favorite string: <b>{str}</b>
                </li>
                <li>
                    Amount: <b>{amountInNumber}</b>
                </li>
                <li>
                    isOk: <b>{isOk}</b>
                </li>
                <li>
                    isOk <b>{String(isOk)}</b>{" "}
                    {/*
                     */
                    }
                </li>
                <li>
                    notSet: <b>{notSet}</b> 
                </li>
            </ul>

        </div>
    )
}
function Child3({str,amountInNumber,isOk,notSet
}){
    return(
            <div>
            <h1>im child component 2</h1>
            <ul>
                <li>
                    Favorite string: <b>{str}</b>
                </li>
                <li>
                    Amount: <b>{amountInNumber}</b>
                </li>
                <li>
                    isOk: <b>{isOk}</b>
                </li>
                <li>
                    isOk <b>{String(isOk)}</b>{" "}
                    {/*
                     */
                    }
                </li>
                <li>
                    notSet: <b>{notSet}</b> 
                </li>
            </ul>

        </div>

    )
}

export default Parent;