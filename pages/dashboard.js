import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
    Button,
    Container,
    Spacer,
    Text
} from '@nextui-org/react';
import { LockIcon } from '../components/icons/LockIcon';
import { useSetRecoilState } from 'recoil';
import { userInfoState } from '../context/states';
import Layout from '@/components/layout';

export default function Dashboard() {
    const setUserInfo = useSetRecoilState(userInfoState)

    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>LOGIN | JONGKEW</title>
                    <meta
                        name="description"
                        content="Login to your ME Back Office account"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Container
                    as="main"
                    display="flex"
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ height: '80vh' }}
                >
                    <Spacer />
                    <h3>ยินดีต้อนรับ</h3>
                    <Image src="/img/jq.png" alt="Vercel Logo"width={300} height={300} css={{ objectFill: "none" }}/>
                    
                    
                    <Button icon={<LockIcon fill="currentColor" />} color="error" onClick={() => setUserInfo({ username: '', firstName: '', lastName: '', email: '' })}>
                        LOGOUT
                    </Button>
                </Container>
            </div>
        </Layout>
    );
}