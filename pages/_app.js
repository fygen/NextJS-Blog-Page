/* _app.js and global.css TOGETHER APPLIES TO ALL PAGES WHEN RENDERED WITHOUT APPLYING THEM ALL WITH A COMPONENT LIKE (DIVS) components/layout.js and layout.module.css files  */

import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps}/>;
}