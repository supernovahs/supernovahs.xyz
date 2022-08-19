import styled from "styled-components";

export default function Projects(props:any){

    const Project = styled.div`
    box-sizing: border-box;
    font-family: -apple-system, -apple-system, 
                BlinkMacSystemFont, 'Segoe UI', Roboto, 
                Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                'Helvetica Neue', sans-serif;
    h3{
        color: #4c525c;
        opacity: 0.9;
        margin-left:60px;
        
        
        }

        li{
            color: #4c525c;
 

        }
        p{
            color: #4c525c;
            margin-left:80px;

  
        }
        a{
            text-decoration:none;
            color: #4c525c;
        }

    `

    return (
        <>
        <div>

        <Project>
            <h3> Hacks </h3>
            <ul>
             <p><a href="https://zkvote.vercel.app/" target="_blank" rel = "noreferrer">Zk - Voting </a></p>
            <p><a href="https://github.com/supernovahs/BuidlGuidl-Stream-contract/tree/master" target="_blank" rel = "noreferrer">BuidlGuidl Optimized Stream contract</a></p>
            <p><a href="https://github.com/supernovahs/JB-multisig" target="_blank" rel = "noreferrer">MultiSig interface for Juicebox V2 - Hackathon</a></p>
                <p><a href="https://github.com/EngrGord/Crypto-Inspect" target="_blank" rel = "noreferrer">Gitcoin-Covalent Hackathon 3rd place - Team of 5</a></p>
                <p><a href="https://github.com/supernovahs/Board-Game" target= "_blank"  rel="noreferrer">Board Game using Zk proofs:Groth16 </a>  </p>
                <p> <a href="https://github.com/supernovahs/Reciprocating-Apecoin-bot" target = "_blank" rel="noreferrer">NFTx-FlashLoan-ApeClaim MEV Bot </a> </p>            
                <p> <a href="https://github.com/supernovahs/DYDX-Flash-loan---FOundry" target = "_blank" rel="noreferrer">Dydx-Flash-Loan Implementation -Foundry-Mainnet Fork </a> </p>            
                <p> <a href="https://github.com/supernovahs/Foundry-Starter-Kit" target = "_blank" rel="noreferrer">Foundry-Starter-Kit </a> </p>   
                <p><a href="https://github.com/supernovahs/MultiSig" target="_blank" rel="noreferrer">MultiSig with inbuilt uniswap swap using Gundb as backend</a> </p>
                <p><a href="https://github.com/supernovahs/BetGame"target="_blank" rel="noreferrer">NBA Betting Game using Chainlink </a></p>
                <p> <a href="https://github.com/supernovahs/Quadratic-Funding" target = "_blank" rel="noreferrer">Quadratic Funding calculator Onchain for 2 Projects Prototype </a> </p>            
                <p><a href="https://github.com/supernovahs/Quadratic-Attention-Payments" rel="noreferrer"> Quadratic Attention Payments Prototype  </a></p>
                <p><a href="https://github.com/supernovahs/Foofa-NFT-fractionalizer-ERC1155-" target="_blank" rel="noreferrer">Foofa NFT Fractionalizer for ERC1155 with inbuilt marketplace with provision for fast liquidity</a></p>
                <p> <a href="https://chrome.google.com/webstore/detail/foofa/ikkkelbckkgpnmhaaajkliilkhgmklhf" target = "_blank" rel="noreferrer">Foofa Gas Live Gas Tracker Chrome Extension  </a> </p>            
                
            </ul>
        </Project>
        </div>
        </>
    )



}