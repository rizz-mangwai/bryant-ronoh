import Navigation from "./navigatiom";
import MainSection from "./MainSection";
import Sidebar from "./sidebar";

function AmazonPage (){
    return (
        <div>
            <navigation/>
            <div style={{display: "flex"}}>
                <Sidebar/>
                <MainSection/>
            </div>
        </div>
    )
}
export default AmazonPage