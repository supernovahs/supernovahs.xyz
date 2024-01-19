import styled from "styled-components";
import Link from "next/link";
export default function Header(props:any){

    const Contact = styled.div`
        display: flex;
        justify-content: flex-end; // Aligns items to the right
        align-items: center;
        width: 100%; // Ensures the div takes full width
        padding: 0 10px;
        border-bottom: 1px solid #e6e6e6;

        ul {
            list-style: none; // Removes default list styling
            margin: 0; // Removes default margin
            padding: 0; // Removes default padding
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
            border-bottom: 1px solid transparent; // Invisible border
            &:hover {
                border-bottom: 1px solid #4c525c; // Underlines text on hover
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