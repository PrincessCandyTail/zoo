'use client'
import Head from 'next/head';
import Image from "next/image";
import OpeningHours from '../components/OpeningHours';
import TicketButton from '../components/TicketButton';
import NavigationBar from '../components/NavigationBar';

export default function page() {
    return (
        <div style={{padding: '20px', textAlign: 'center'}}>
            <Head>
                <title>Zoo Zürich</title>
            </Head>

            <header style={{marginBottom: '20px'}}>
                <image src="/images/zoo-logo.png" alt="Zoo Zürich Logo"/>
            </header>

            <OpeningHours/>

            <div style={{marginTop: '20px'}}>
                <TicketButton/>
            </div>

            <NavigationBar/>
        </div>
    );
};
