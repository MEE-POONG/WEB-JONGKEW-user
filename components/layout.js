import { Button, Card, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfoState } from "../context/states";
import Image from 'next/image';
import { LockIcon } from "./icons/LockIcon";

export default function Layout({ children }) {
    // const setUserInfo = useSetRecoilState(userInfoState)

    const router = useRouter();
    // const [userInfo] = useRecoilState(userInfoState)
    // const [slideBar, setSlideBar] = useState(false);
    // useEffect(() => {
    //     if (userInfo.username) {
    //         setSlideBar(true);
    //         if (router.pathname === "/") {
    //             router.push("/dashboard");
    //         }
    //     } else {
    //         setSlideBar(false);
    //         router.push("/");
    //     }
    // }, [userInfo.username]);

    // if (slideBar) {
        return (
            <>
                <Grid.Container>
                    <Grid xs={2} md={2}>
                        <Card color="white" css={{ h: "$100" }}>
                            <Spacer />
                            <Image src="/img/jq.png" alt="Vercel Logo" width={200} height={220} css={{ objectFill: "none" }}/> 
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/dashboard")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b> หน้าหลัก </Text>
                                </Row>
                            </Button>
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/agent")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b>ข้อมูลส่วนตัว</Text>
                                </Row>
                            </Button>
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/partner")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b>เพิ่มเเอดมิน</Text>
                                </Row>
                            </Button>
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/partner")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b> จองคิว </Text>
                                </Row>
                            </Button>
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/partner")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b> คิดยอดโปรโมขั่น </Text>
                                </Row>
                            </Button>
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/partner")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b> รายได้พันธมิตร </Text>
                                </Row>
                            </Button>
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/partner")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b> ผู้ดูแล </Text>
                                </Row>
                            </Button>
                            <Spacer y={1} />
                            <Button shadow color="white" onClick={() => router.push("/partner")} auto>
                                <Row wrap="wrap" justify="space-between">
                                    <Text b> ข้อมูลเว็บ </Text>
                                </Row>
                            </Button>
                            <Spacer y={4} />
                            <Button icon={<LockIcon fill="currentColor" />} shadow color="error" onClick={() => setUserInfo({ username: '', firstName: '', lastName: '', email: '' })} auto>
                            </Button>
                        </Card>
                    </Grid>
                    <Grid xs={10} md={10}>
                        <Container color="white" style={{ minHeight: '100vh' }}>
                            <Spacer />
                            {children}
                            <Spacer />
                        </Container>
                    </Grid>
                </Grid.Container>
            </>
        )
    // } else {
    //     return <>
    //         <main>{children}</main>
    //     </>;
    // }
}