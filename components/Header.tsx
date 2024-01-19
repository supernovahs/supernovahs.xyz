import styled from "styled-components";
import Link from "next/link";
export default function Header(props:any){

    const Contact = styled.div`
        display: flex;
        justify-content: flex-end; 
        align-items: center;
        width: 100%;
        padding: 0 10px;
        border-bottom: 1px solid #e6e6e6;

        ul {
            list-style: none; 
            margin: 0;
            padding: 0; 
        }

        li {
            display: inline-block;
            margin: 0 8px;
            padding-bottom: 5px; // Provides spacing and underlines effect on hover
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            transition: all 0.2s ease-in-out;
        }

        a {
            text-decoration: none;
            color: #4c525c;
            border-bottom: 1px solid transparent; 
            &:hover {
                border-bottom: 1px solid #4c525c;
            }
        }
    `;
    
    return(
        <>
        <Contact>
            <ul>
                <li>
                    <Link href="mailto:supernovahs@proton.me" passHref>
                        <a>Email</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/supernovahs444" passHref>
                        <a>Twitter</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/supernovahs" passHref>
                        <a>Github</a>
                    </Link>
                </li>
            </ul>
        </Contact>
    </>
    )
}