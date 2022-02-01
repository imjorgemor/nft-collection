import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import YuppieList from "../components/YuppieList";
import Main from "../components/Main";

export default function Home({ nfts }) {

    const [yuppieData, setYuppieData] = useState([]);
    const [mainYuppie, setMainYuppie] = useState();

    useEffect(() => {
        const nftData = nfts.assets
        setYuppieData(nftData);
        console.log(nftData)
    }, [yuppieData]);

    return (
        <div>
            <Layout
                page={"Welcome to 90s yuppies"}
            >
                {
                    yuppieData.length > 1 &&
                    (<>

                        <main>
                            <Main
                                yuppie={
                                    mainYuppie
                                        ? mainYuppie
                                        : yuppieData[(Math.floor(Math.random() * yuppieData.length))]}
                            />
                        </main>

                        <section>
                            <YuppieList
                                yuppieData={yuppieData}
                                setMainYuppie={setMainYuppie}
                            />
                        </section>
                    </>)
                }
            </Layout>
        </div>
    )
}


export async function getServerSideProps() {
    const url = "https://testnets-api.opensea.io/assets?asset_contract_address=0xE07FF99c93306b60bcd0E1c7AA901C7efcFAaC8a&order_direction=asc"
    const res = await fetch(url);
    const nfts = await res.json();

    return {
        props: {
            nfts
        }
    }
}