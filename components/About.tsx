
import styled from "styled-components";


export default function About(props:any){

    const FirstIntro =  styled.div `

    box-sizing: border-box;
    display: flex-wrap;
    font-family: -apple-system, -apple-system, 
                BlinkMacSystemFont, 'Segoe UI', Roboto, 
                Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                'Helvetica Neue', sans-serif;

    h3{
    color: #4c525c;
    
    margin-left:60px;
    

    }

    li{
        
        display: flex-wrap;
        color: #4c525c;
        margin-left : 50px;
        margin-bottom: 15px;
        
    }

    p{
        display: flex-wrap;
        color: #4c525c;
        margin-left : 50px;
        margin-bottom: 15px;
       
    }
    
    
    `

    const Interests = styled.div`
    font-family: -apple-system, -apple-system, 
                BlinkMacSystemFont, 'Segoe UI', Roboto, 
                Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                'Helvetica Neue', sans-serif;

    h3{
        color: #4c525c;
        
        margin-left:60px;
        
    
        }
        p{
            display: flex-wrap;
            color: #4c525c;
            margin-left : 70px;
            margin-bottom: 15px;
            
        }
    
    `

    return(
        <>  <div>

            <FirstIntro>
            <div>

            <h3>About</h3>
            </div>
            <ul>

            <li>I am a developer at BuidlGuidl , a public good , creating and researching for the ethereum ecosystem</li>
            <li>Task is to learn new stuff , build dapps and  try to make others learn </li>

            
            </ul>
            </FirstIntro>

            <Interests>
                <h3> Interests</h3>
                <p>  AppliedZK , OpenSourceSoftware , Finance</p>
               
            </Interests>


        </div>

        </>
    )
}