import styled from "styled-components";

export default function Projects(props:any){

    const ProjectsContainer = styled.div`
    text-align: center; // Centers the text of the direct children
    width: 100%; // Sets the width of the container
`;

const StyledList = styled.ul`
    list-style-type: none; // Removes the default list styling
    padding: 0; // Removes default padding
    display: block; // Makes the ul a block-level element
    margin: auto; // Centers the block-level element horizontally
    max-width: 600px; // Adjust this to fit your design
`;

const StyledListItem = styled.li`
    color: #4c525c;
    margin-bottom: 15px; // Space between list items
    display: inline-block; // Makes the li inline-block to allow centering with text-align
    text-align: left; // Aligns the text to the left within the centered li
    width: 100%; // Ensures the text alignment takes effect
`;

    return (
        <>
        <ProjectsContainer>

            <h3> Hacks </h3>
            <StyledList>
            <StyledListItem><a href="https://devfolio.co/projects/zksunade-bd14" target="_blank" rel = "noreferrer">Zk-Sunade: optimized Groth16 verifier using Arbitrum Stylus</a></StyledListItem>
            <StyledListItem><a href="https://ethglobal.com/showcase/web3-soundbox-in4kn" target="_blank" rel = "noreferrer">Web3 SoundBox - ETH PARIS Winner in 2 sponsors</a></StyledListItem>
            <StyledListItem><a href="https://github.com/RareSkills/noir-puzzles" target="_blank" rel = "noreferrer">Noir Zero Knowledge Puzzles</a></StyledListItem>
            <StyledListItem><a href="https://github.com/RareSkills/zero-knowledge-puzzles" target="_blank" rel = "noreferrer">Circom Zero Knowledge Puzzles</a></StyledListItem>
            <StyledListItem><a href="https://github.com/supernovahs/contract-x-contract" target="_blank" rel = "noreferrer">Consensys Diligence</a></StyledListItem>
            <StyledListItem><a href="https://github.com/supernovahs/Sudoku-Verifier-Noir" target="_blank" rel = "noreferrer">4 By 4 Sudoku Verifier in Noir Lang</a></StyledListItem>
            <StyledListItem><a href="https://github.com/supernovahs/SignatureCollider" target="_blank" rel = "noreferrer">Signature Collision Verifier between for proxies</a></StyledListItem>
            <StyledListItem><a href="https://github.com/supernovahs/zebra" target="_blank" rel = "noreferrer">Smart contract building blocks</a></StyledListItem>
            <StyledListItem><a href="https://github.com/supernovahs/SeaportBook" target="_blank" rel = "noreferrer">Seaport Development Book</a></StyledListItem>
             <StyledListItem><a href="https://github.com/supernovahs/sloot" target="_blank" rel = "noreferrer">Track storage slots(EVM) that matters you the most</a></StyledListItem>
             <StyledListItem><a href="https://github.com/supernovahs/Natspec" target="_blank" rel = "noreferrer">Generate Perfect Natspec for Contracts </a></StyledListItem>
            <StyledListItem><a href="https://worldads.vercel.app/" target="_blank" rel = "noreferrer">Quadratic Ads-Powered by WorldId -EthOnline </a></StyledListItem>
             <StyledListItem><a href="https://zkvote.vercel.app/" target="_blank" rel = "noreferrer">Zk - Voting  </a></StyledListItem>
            <StyledListItem><a href="https://github.com/supernovahs/BuidlGuidl-Stream-contract/tree/master" target="_blank" rel = "noreferrer">BuidlGuidl Optimized Stream contract</a></StyledListItem>
            <StyledListItem><a href="https://github.com/supernovahs/JB-multisig" target="_blank" rel = "noreferrer">MultiSig interface for Juicebox V2 - Hackathon</a></StyledListItem>
                <StyledListItem><a href="https://github.com/EngrGord/Crypto-Inspect" target="_blank" rel = "noreferrer">Gitcoin-Covalent Hackathon 3rd place - Team of 5</a></StyledListItem>
                <StyledListItem><a href="https://github.com/supernovahs/Board-Game" target= "_blank"  rel="noreferrer">Board Game using Zk proofs:Groth16 </a>  </StyledListItem>
                <StyledListItem> <a href="https://github.com/supernovahs/Reciprocating-Apecoin-bot" target = "_blank" rel="noreferrer">NFTx-FlashLoan-ApeClaim MEV Bot </a> </StyledListItem>            
                <StyledListItem> <a href="https://github.com/supernovahs/DYDX-Flash-loan---FOundry" target = "_blank" rel="noreferrer">Dydx-Flash-Loan Implementation -Foundry-Mainnet Fork </a> </StyledListItem>            
                <StyledListItem> <a href="https://github.com/supernovahs/Foundry-Starter-Kit" target = "_blank" rel="noreferrer">Foundry-Starter-Kit </a> </StyledListItem>   
                <StyledListItem><a href="https://github.com/supernovahs/MultiSig" target="_blank" rel="noreferrer">MultiSig with inbuilt uniswap swap using Gundb as backend</a> </StyledListItem>
                <StyledListItem><a href="https://github.com/supernovahs/BetGame"target="_blank" rel="noreferrer">NBA Betting Game using Chainlink </a></StyledListItem>
                <StyledListItem> <a href="https://github.com/supernovahs/Quadratic-Funding" target = "_blank" rel="noreferrer">Quadratic Funding calculator Onchain for 2 Projects Prototype </a> </StyledListItem>            
                <StyledListItem><a href="https://github.com/supernovahs/Quadratic-Attention-Payments" rel="noreferrer"> Quadratic Attention Payments Prototype  </a></StyledListItem>
                <StyledListItem><a href="https://github.com/supernovahs/Foofa-NFT-fractionalizer-ERC1155-" target="_blank" rel="noreferrer">Foofa NFT Fractionalizer for ERC1155 with inbuilt marketplace with provision for fast liquidity</a></StyledListItem>
                <StyledListItem> <a href="https://chrome.google.com/webstore/detail/foofa/ikkkelbckkgpnmhaaajkliilkhgmklhf" target = "_blank" rel="noreferrer">Foofa Gas Live Gas Tracker Chrome Extension  </a> </StyledListItem>            
            </StyledList>

        </ProjectsContainer>
        </>
    )



}
