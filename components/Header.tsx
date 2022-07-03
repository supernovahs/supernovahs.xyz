import styled from "styled-components";

export default function Header(){

    const Contact = styled.div`
        display: flex;
        align-items: center;
        max-width: 1200px;
        padding: 0  10px;
        margin: 0 10px;
        border-bottom: 1px solid #e6e6e6;


        li {
            color: #4c525c;
            margin:8px;
            font-family: -apple-system, -apple-system, 
                BlinkMacSystemFont, 'Segoe UI', Roboto, 
                Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                'Helvetica Neue', sans-serif;
            border-bottom: 1px solid #4c525c;
            display: inline-block;
        }
       

    `
    
    return(
      <>
        <Contact>
            <div>
                <a href="/">
                    <img src="logo.png" alt="" height="40" width="40" />
                </a>
            </div>
            <div>
            <ul>

            <li >  Twitter </li>
            <li>Github</li>
            <li>Resume</li>
            </ul>
            </div>
        </Contact>
        
      </>
    )
}