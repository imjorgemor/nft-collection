import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <div>
            <Layout
                page={"Welcome to 90s yuppies"}
            >
                <h1>Desde index</h1>
            </Layout>
        </div>

    )
}
