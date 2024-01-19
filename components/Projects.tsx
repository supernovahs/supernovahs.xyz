import styled from "styled-components";

export default function Projects(props:any){

    const Project = styled.div`
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                     Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        h3 {
            color: #4c525c;
            opacity: 0.9;
            text-align: center; // Center your headers
        }

        ul {
            list-style-type: disc; // This ensures that the bullet points are shown
            padding-left: 0; // Remove default padding
            margin-left: 0; // Adjust margin to align with the center of the page
            text-align: left; // Align text to the left
        }

        li {
            color: #4c525c;
            margin-bottom: 15px; // Space between list items
        }

        a {
            text-decoration: none;
            color: #4c525c;
            &:hover {
                text-decoration: underline; // Style for hover state
            }
        }
    `;

    return (
        <>
        <div>

        <Project>
            <h3> Hacks </h3>
            <ul>
            <li><a href="https://devfolio.co/projects/zksunade-bd14" target="_blank" rel = "noreferrer">Zk-Sunade: optimized Groth16 verifier using Arbitrum Stylus</a></li>
            <li><a href="https://ethglobal.com/showcase/web3-soundbox-in4kn" target="_blank" rel = "noreferrer">Web3 SoundBox - ETH PARIS Winner in 2 sponsors</a></li>
            <li><a href="https://github.com/RareSkills/noir-puzzles" target="_blank" rel = "noreferrer">Noir Zero Knowledge Puzzles</a></li>
            <li><a href="https://github.com/RareSkills/zero-knowledge-puzzles" target="_blank" rel = "noreferrer">Circom Zero Knowledge Puzzles</a></li>
            <li><a href="https://github.com/supernovahs/contract-x-contract" target="_blank" rel = "noreferrer">Consensys Diligence</a></li>
            <li><a href="https://github.com/supernovahs/Sudoku-Verifier-Noir" target="_blank" rel = "noreferrer">4 By 4 Sudoku Verifier in Noir Lang</a></li>
            <li><a href="https://github.com/supernovahs/SignatureCollider" target="_blank" rel = "noreferrer">Signature Collision Verifier between for proxies</a></li>
            <li><a href="https://github.com/supernovahs/zebra" target="_blank" rel = "noreferrer">Smart contract building blocks</a></li>
            <li><a href="https://github.com/supernovahs/SeaportBook" target="_blank" rel = "noreferrer">Seaport Development Book</a></li>
             <li><a href="https://github.com/supernovahs/sloot" target="_blank" rel = "noreferrer">Track storage slots(EVM) that matters you the most</a></li>
             <li><a href="https://github.com/supernovahs/Natspec" target="_blank" rel = "noreferrer">Generate Perfect Natspec for Contracts </a></li>
            <li><a href="https://worldads.vercel.app/" target="_blank" rel = "noreferrer">Quadratic Ads-Powered by WorldId -EthOnline </a></li>
             <li><a href="https://zkvote.vercel.app/" target="_blank" rel = "noreferrer">Zk - Voting  </a></li>
            <li><a href="https://github.com/supernovahs/BuidlGuidl-Stream-contract/tree/master" target="_blank" rel = "noreferrer">BuidlGuidl Optimized Stream contract</a></li>
            <li><a href="https://github.com/supernovahs/JB-multisig" target="_blank" rel = "noreferrer">MultiSig interface for Juicebox V2 - Hackathon</a></li>
                <li><a href="https://github.com/EngrGord/Crypto-Inspect" target="_blank" rel = "noreferrer">Gitcoin-Covalent Hackathon 3rd place - Team of 5</a></li>
                <li><a href="https://github.com/supernovahs/Board-Game" target= "_blank"  rel="noreferrer">Board Game using Zk proofs:Groth16 </a>  </li>
                <li> <a href="https://github.com/supernovahs/Reciprocating-Apecoin-bot" target = "_blank" rel="noreferrer">NFTx-FlashLoan-ApeClaim MEV Bot </a> </li>            
                <li> <a href="https://github.com/supernovahs/DYDX-Flash-loan---FOundry" target = "_blank" rel="noreferrer">Dydx-Flash-Loan Implementation -Foundry-Mainnet Fork </a> </li>            
                <li> <a href="https://github.com/supernovahs/Foundry-Starter-Kit" target = "_blank" rel="noreferrer">Foundry-Starter-Kit </a> </li>   
                <li><a href="https://github.com/supernovahs/MultiSig" target="_blank" rel="noreferrer">MultiSig with inbuilt uniswap swap using Gundb as backend</a> </li>
                <li><a href="https://github.com/supernovahs/BetGame"target="_blank" rel="noreferrer">NBA Betting Game using Chainlink </a></li>
                <li> <a href="https://github.com/supernovahs/Quadratic-Funding" target = "_blank" rel="noreferrer">Quadratic Funding calculator Onchain for 2 Projects Prototype </a> </li>            
                <li><a href="https://github.com/supernovahs/Quadratic-Attention-Payments" rel="noreferrer"> Quadratic Attention Payments Prototype  </a></li>
                <li><a href="https://github.com/supernovahs/Foofa-NFT-fractionalizer-ERC1155-" target="_blank" rel="noreferrer">Foofa NFT Fractionalizer for ERC1155 with inbuilt marketplace with provision for fast liquidity</a></li>
                <li> <a href="https://chrome.google.com/webstore/detail/foofa/ikkkelbckkgpnmhaaajkliilkhgmklhf" target = "_blank" rel="noreferrer">Foofa Gas Live Gas Tracker Chrome Extension  </a> </li>            
                
            </ul>
        </Project>
        </div>
        </>
    )



}
