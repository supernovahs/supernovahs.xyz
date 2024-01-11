
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
            <li>Paradigm <a href = "https://github.com/paradigmxyz/reth" target="_blank" rel = "noreferrer">Reth</a> (#14 All Time) Contributor</li>    
            <li>Auditor</li>
            <li>Damage Dealer at <a href="https://buidlguidl.com/builders/0x1b37B1EC6B7faaCbB9AddCCA4043824F36Fb88D8" target="_blank" rel = "noreferrer"><b>BuidlGuidl</b></a>  , a public good , creating and researching for the ethereum ecosystem</li>  
            
            <b>Prev:</b>          
            <li> Research Engineer at <a href = "https://www.rareskills.io/" target="_blank" rel = "noreferrer">Rareskills</a></li>
            <li> Fellow <a href = "https://yacademy.dev/" target="_blank" rel = "noreferrer">yAcademy</a></li>
            </ul>
            <h3>Languages:In order of proficiency</h3>
            <ul>
                <li>
                    Solidity,Rust,Noir,Js, Huff, Circom  
                </li>
            </ul>
            <h3>
                Frameworks/Stack
            </h3>
            <ul><li>Foundry,Viem,Scaffold-Eth 2 ,Wagmi,Nextjs, Ethersjs, ether-rs</li></ul>
            </FirstIntro>

            <Interests>
                <h3> Interests</h3>
                <p>  AppliedZK , Audit </p>
            </Interests>

        </div>

        </>
    )
}
