import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"




const BlueCardAdmin = ({children, title, body,link,}) => {

   
    return <Card style={{background:"#0D2E6E", borderRadius:10, color:"white", padding: 70, display:"flex", flexDirection:"row", marginBottom: 37}}>
   

        <div style={{flexBasis:"45%", marginRight: 20, display:"flex", flexDirection:"column"}}>
        <h2 style={{marginBottom: 16}}>{title} </h2>

        <div style={{ borderTop: "1px solid #fff ", marginLeft: 155, marginRight:30,padding:10,width:"30%"}}></div>
        
        <span style={{marginBottom: 16}}>{body}</span>
            <div>

               
             </div>
        </div>


        <div style={{flexBasis:"50%"}}>
        {children}
        </div>
       
        </Card>
   
    
    }


export default BlueCardAdmin