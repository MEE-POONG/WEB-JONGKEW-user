import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import ModelAddAgent from "@/components/agent/ModelAddAgent";
import ModelEditAgent from "@/components/agent/ModelEditAgent";
import { Col, Container, Grid, Input, Row, Spacer, Table, Tooltip } from "@nextui-org/react";
import Head from "next/head";
import { useState } from 'react'
import ModelCreditAgent from "@/components/agent/ModelCreditAgent";
import { CreditIcon } from "@/components/icons/CreditIcon";
import { AddUserIcon } from "@/components/icons/AddUserIcon";
import ModelCreateAgent from "@/components/agent/ModelCreateAgent";
import ModelOpenAgent from "@/components/agent/ModelOpenAgent";
import Layout from "@/components/layout";

export default function Agent() {
    const [visible, setVisible] = useState(false);
    const [created, setCreated] = useState(false);
    const [credit, setCredit] = useState(false);
    const [opened, setOpened] = useState(false);

    return (
        <Layout>
            <Head>
                <title>AGENT - เอเย่น | ME BACK OFFICE</title>
                <meta
                    name="description"
                    content="เอเย่น ME Back Office"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <h1>ระบบจัดการข้อมูลเอเย่น</h1>

                <Grid>
                    <Row style={{ alignItems: 'center' }}>
                        <Input
                            labelLeft="ค้นหา"
                            placeholder="พิมพ์คำค้นหา"
                            fullWidth
                        />

                        <svg style={{ cursor: 'pointer', width: '24px', marginLeft: '10px' }} onClick={() => console.log("KKK")} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Row>
                </Grid>
                <Spacer />
                <div style={{
                    textAlign: '-webkit-right'
                }}>
                    <ModelAddAgent />
                    <ModelOpenAgent visible={opened} setVisible={setOpened} />
                    <ModelCreateAgent visible={created} setVisible={setCreated} />
                    <ModelCreditAgent visible={credit} setVisible={setCredit} />
                    <ModelEditAgent visible={visible} setVisible={setVisible} />
                </div>
                <Spacer />

                <Table
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>NO.</Table.Column>
                        <Table.Column>USERNAME</Table.Column>
                        <Table.Column>ตำแหน่ง</Table.Column>
                        <Table.Column>สายงาน</Table.Column>
                        <Table.Column>วันที่ลง</Table.Column>
                        <Table.Column>สถานะ</Table.Column>
                        <Table.Column>จัดการ</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell>ณัฐพงษ์</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell>01/01/2001</Table.Cell>
                            <Table.Cell>ปิดใช้งาน</Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="center">
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="เติมเครดิต">
                                            <IconButton onClick={() => { setCredit(true); }}>
                                                <CreditIcon size={20} fill="#979797" />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="สร้างพันธมิตร">
                                            <IconButton onClick={() => { setCreated(true); }}>
                                                <AddUserIcon size={20} fill="#979797" />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="Lock user">
                                            <IconButton onClick={() => setOpened(true)}>
                                                <LockIcon size={20} fill="#979797" />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="Edit user">
                                            <IconButton onClick={() => { setVisible(true); }}>
                                                <EditIcon size={20} fill="#979797" />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip
                                            content="Delete user"
                                            color="error"
                                            onClick={() => console.log("Delete user", "user.id")}
                                        >
                                            <IconButton>
                                                <DeleteIcon size={20} fill="#FF0080" />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                </Row>

                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </Container>
        </Layout>
    );
}