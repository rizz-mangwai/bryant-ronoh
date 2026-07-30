function ItemCard(){
    const descripion =
    "a classic, high intensidty tool for working out "
    const amount = "KES 2,000";
    return (
        <div style ={{
            display: "flex",
            flexDirection: "column",
            width:"300px",
            border:"2px solid rgba(0,0,0,0.2)",
            padding:"2px 4px 2px 4px",
        }}>
            <div
            style={{width:"100%",display:"flex",justifyContent:"center"
            }}>
                <img width={"200px"} src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL320_.jpg" alt="" />

            </div>
            <div>
                <div style={{textAlign:"left", fontSize:"10px"}}>{descripion}</div>
                <div style={{fontSize:"20px"}}>{amount}</div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <button style={{
                        border:"2px solid rgba(0,0,0,0.1)",
                        padding:"2px 4px 2px 4px",
                        color:"white",
                        backgroundColor:"orange"
                    }}>
                        Add to cart
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default ItemCard;