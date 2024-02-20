import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';


export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="KeZero documentation website, explore API and documentation details!">
            <main>
                <div className={styles.slider}>
                    <img className={styles.image} alt='logo' src="/img/black_and_blue.png" />
                    <h1><span style={{ color: "#2050ce" }}>KeZero</span> Documentation Website</h1>
                    <h2 className={styles.text}>Explore the KeZero API documentation</h2>
                </div>
            </main>
        </Layout>
    );
}
