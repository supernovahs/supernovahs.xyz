import styled from "styled-components";
import Link from "next/link";
export default function Header(props:any){

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
                <Link href= "/">
                    <img src="logo.png" alt="" height="40" width="40" />
                </Link>
            </div>
            <div>
            <ul>

            <li > <Link href = "https://twitter.com/harshit16024263">Twitter</Link> </li>
            <li> <Link href = "https://github.com/supernovahs">Github</Link> </li>
            <li> <Link href = "">Resume</Link> </li>
            </ul>
            </div>
        </Contact>
        
      </>
    )
}