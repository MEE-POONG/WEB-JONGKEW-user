import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  Button,
  Container,
  Grid,
  Input,
  Loading,
  Spacer,
  Text
} from '@nextui-org/react';
import { LockIcon } from '../components/icons/LockIcon';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../context/states';

import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react'
import ModalLoginError from '@/components/ModalLoginError';
import Layout from '@/components/layout';

export default function Home() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  if (userInfo.username) {
    router.push("/dashboard");
    return <> </>;
  }
  else {
    return (
      <Layout>
        <div className={styles.container}>
          <Head>
            <title>LOGIN | WEB JONGKEW</title>
            <meta
              name="description"
              content="Login to your ME Back Office account"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <form onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const username = e.target.username.value;
            const password = e.target.password.value;

            let config = {
              method: 'post',
              url: '/api/login',
              headers: {
                'Content-Type': 'application/json'
              },
              data: { username, password }
            };

            axios(config)
              .then((response) => {
                setUserInfo({
                  username: response.data.data.username,
                  token: response.data.data.token,
                  firstName: response.data.data.firstName,
                  lastName: response.data.data.lastName,
                  email: response.data.data.email,
                })
                router.push("/dashboard");
              })
              .catch((error) => {
                setVisible(true);
                setLoading(false);
                console.log(error);
              });

          }}>
            <Container
              as="main"
              display="flex"
              direction="column"
              justify="center"
              alignItems="center"
              style={{ height: '100vh' }}
            >
              <Spacer />
              <Image src="/img/jq.png" alt="Vercel Logo"width={250} height={250} css={{ objectFill: "none" }}/>
              <Spacer />
              <Text h1 className={styles.title}>
                WEB JONGKEW
              </Text>
              <Spacer />
              <Grid.Container gap={4} justify="center">
                <Grid>
                  <Input
                    id="username"
                    name="username"
                    width="236px"
                    clearable
                    helperText="Please enter your Username"
                    label="Username"
                    placeholder="Enter your Username" />
                  <Spacer />
                </Grid>
                <Grid>
                  <Input.Password
                    id='password'
                    name='password'
                    clearable
                    color="warning"
                    initialValue=""
                    helperText="Insecure password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password with eye"
                  />
                </Grid>
              </Grid.Container>

              <Spacer y={1} />

              {!loading && <Button icon={<LockIcon fill="currentColor" />} type="submit" color="success">
                LOGIN
              </Button>}

              {loading && <Button icon={<Loading color="currentColor" />} color="success">
                LOADING
              </Button>}

              <ModalLoginError visible={visible} setVisible={setVisible} />
            </Container>
          </form>
        </div>
      </Layout>
    );
  }
}