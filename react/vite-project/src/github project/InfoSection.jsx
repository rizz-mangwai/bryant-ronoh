function InfoSection(props) {
    const {people} = props;
    return(
        <div style={{padding:"20px",display:"flex",alignItems:"center",flexDirection:"column"}}>
            <b style={{fontSize:"28px"}}>{people.length}</b>
            <span style={{fontSize:"14px",marginLeft:"10px"}}>User result</span>
        </div>
    );
}

export default InfoSection;