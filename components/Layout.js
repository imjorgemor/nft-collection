import Header from "./Header";
import Head from 'next/head'

const Layout = ({ children, page }) => {
    return (
        <div className="app">
            <Head>
                <title>90S yuppies - {page} </title>
                <meta name="description" content="sitio de los criptoyuppies" />
            </Head>

            <Header />
           {children}
           
        </div>
  )
};

export default Layout;
