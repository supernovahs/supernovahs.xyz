
import styled from "styled-components";


export default function About(props:any){

    const CenteredContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 20px; // Add padding if needed
        box-sizing: border-box;
    `;

    const StyledList = styled.ul`
        list-style-position: inside; // Ensures bullets are aligned with the text
        padding-left: 0; // Removes default padding
        margin: 0; // Removes default margin
        text-align: left; // Aligns the text to the left, within the centered container
    `;

    const ListItem = styled.li`
        color: #4c525c;
        margin-bottom: 15px; // Add space between list items
    `;

    const FirstIntro =  styled.div `
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center; // Center text within the FirstIntro

        h3, p {
            color: #4c525c;
            margin-bottom: 15px;
        }
    `;

    const Interests = styled.div`
    font-family: -apple-system, -apple-system, 
                BlinkMacSystemFont, 'Segoe UI', Roboto, 
                Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                'Helvetica Neue', sans-serif;

                h3, p {
                    color: #4c525c;
                    margin-bottom: 15px;
                }
    
    `

    return(
        <>  <div>
            <CenteredContainer>
            <FirstIntro>
            <div>

            <h3>I am a  🦀 focused engineer working on ethereum.</h3>
            </div>
            <StyledList>
            <ListItem>Paradigm <a href = "https://github.com/paradigmxyz/reth" target="_blank" rel = "noreferrer">Reth</a> (#14 All Time) Contributor</ListItem>    
            <ListItem>Security</ListItem>
            <ListItem>Damage Dealer at <a href="https://buidlguidl.com/builders/0x1b37B1EC6B7faaCbB9AddCCA4043824F36Fb88D8" target="_blank" rel = "noreferrer"><b>BuidlGuidl</b></a>  , a public good , creating and researching for the ethereum ecosystem</ListItem>  
            
            <b>Prev:</b>          
            <ListItem> Research Engineer at <a href = "h ttps://www.rareskills.io/" target="_blank" rel = "noreferrer">Rareskills</a></ListItem>
            <ListItem> Fellow <a href = "https://yacademy.dev/" target="_blank" rel = "noreferrer">yAcademy</a></ListItem>
            </StyledList>
            <h3>Languages:In order of proficiency</h3>
            <StyledList>
                <ListItem>
                Rust,Solidity,Noir,Js, Huff, Circom  
                </ListItem>
            </StyledList>
            <h3>
                Frameworks/Stack
            </h3>
            <StyledList><ListItem>Alloy,Foundry,Viem,Scaffold-Eth 2 ,Wagmi,Nextjs, Ethersjs, ether-rs</ListItem></StyledList>
            </FirstIntro>

            <Interests>
                <div><h3> Interests</h3></div>
                <StyledList>
                <ListItem>  AppliedZK , Audit </ListItem>
                </StyledList>
            </Interests>
            </CenteredContainer>

        </div>

        </>
    )
}
