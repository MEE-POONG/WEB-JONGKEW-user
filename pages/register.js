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


import { useState } from 'react'
import ModalLoginError from '@/components/ModalLoginError';

export default function Home() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  
    return (
      <div className={styles.container}>
        <Head>
          <title>REGISTER | WEB JONGKEW</title>
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
            direction="center"
            justify="center"
            alignItems="center  "

            style={{ height: '100vh', width: '80vh' }}
            
          >
            <Spacer />
            <Image src="/img/jq.png" alt="Vercel Logo"width={250} height={250} css={{ objectFill: "none" }}/>
            <Spacer />
            <Text h1 className={styles.title}>
            
            </Text>
            <Spacer />
            <Grid.Container gap={4} justify="center">
            <Grid xs={6}>
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
              <Grid xs={6}>
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
              </Grid >
              <Grid xs={6}>
                <Input
                  id="Password"
                  name="Password"
                  width="236px"
                  clearable
                  helperText="Please enter your email"
                  label="Email"
                  placeholder="enter Email" />
                <Spacer />
                </Grid>

                <Grid xs={6}>
                <Input.Password
                  id='password'
                  name='password'
                  clearable
                  color="warning"
                  initialValue=""
                  helperText="Insecure password"
                  type="password"
                  label="Confirm Password"
                  placeholder="Enter your password with eye"
                />
            
                <Spacer />
               </Grid >
            </Grid.Container>

            <Spacer y={-10} />
            <Spacer x={-4} />

            {!loading && <Button icon={<LockIcon fill="currentColor" />} type="submit" color="success">
              Register
            </Button>}

            {loading && <Button icon={<Loading color="currentColor" />} color="success">
              LOADING
            </Button>}

            <ModalLoginError visible={visible} setVisible={setVisible} />
          </Container>
        </form>
      </div>
    );
  }
