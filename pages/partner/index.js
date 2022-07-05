import { DeleteIcon } from "@/components/icons/DeleteIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { IconButton } from "@/components/icons/IconButton";
import { LockIcon } from "@/components/icons/LockIcon";
import Layout from "@/components/layout";
import ModelAddPartner from "@/components/partner/ModelAddPartner";
import ModelEditPartner from "@/components/partner/ModelEditPartner";
import { Col, Container, Grid, Input, Row, Spacer, Table, Tooltip } from "@nextui-org/react";
import Head from "next/head";
import { useState } from 'react'

export default function Partner() {
    const [visible, setVisible] = useState(false);

    return (
        <Layout>
            <Head>
                <title>PARTNER - เเอดมิน | JONGKEW</title>
                <meta
                    name="description"
                    content="พันธมิตรของ JONGKEW"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <h1>ระบบจัดการข้อมูลเเอดมิน</h1>

                <Grid>
                    <Row style={{ alignItems: 'center' }}>
                        <Input
                            labelLeft="ค้นหา"
                            placeholder="พิมพ์คำค้นหา"
                            fullWidth
                        />

                        <svg style={{ cursor: 'pointer', width: '24px', marginLeft: '10px' }} onClick={() => console.log("KKK")} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Row>
                </Grid>
                <Spacer />
                <div style={{
                    textAlign: '-webkit-right'
                }}>
                    <ModelAddPartner />
                    <ModelEditPartner visible={visible} setVisible={setVisible} />
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
                        <Table.Column>NAME</Table.Column>
                        <Table.Column>LINE</Table.Column>
                        <Table.Column>TEL</Table.Column>
                        <Table.Column></Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell>ณัฐพงษ์</Table.Cell>
                            <Table.Cell>CEO</Table.Cell>
                            <Table.Cell>0909998900</Table.Cell>
                            <Table.Cell>
                                <Row justify="center" align="center">
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="Details">
                                            <IconButton onClick={() => console.log("View user", "user.id")}>
                                                <EyeIcon size={20} fill="#979797" />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="Lock user">
                                            <IconButton onClick={() => console.log("Lock user", "user.id")}>
                                                <LockIcon size={20} fill="#979797" />
                                            </IconButton>
                                        </Tooltip>
                                    </Col>
                                    <Col css={{ d: "flex" }}>
                                        <Tooltip content="Edit user">
                                            <IconButton onClick={() => { setVisible(true); console.log("Edit user", "user.id") }}>
                                                <EditIcon size={20
                                                } fill="#979797" />
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