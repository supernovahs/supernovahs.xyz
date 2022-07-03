import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ThemeProvider} from "styled-components";
import {theme} from "../components/Layout";
import Header from '../components/Header';
import About from '../components/About';
const Home: NextPage = () => {
  return (
    
    <ThemeProvider theme={theme}>
        <Header>
          <About>

          </About>
        </Header>
    </ThemeProvider>
  )
}

export default Home
