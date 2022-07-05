import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Grid, Radio, Spacer } from "@nextui-org/react";




export default function ModelEditPartner({ visible, setVisible }) {
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <div>
            <Modal
                closeButton
                blur

                width="90vw"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        ระบบแก้ไขข้อมูลพันธมิตร
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4}>
                        <Grid xs={6}>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="ผู้แนะนำ"
                                placeholder="ผู้แนะนำ"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Username"
                                placeholder="Username"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Password"
                                placeholder="Password"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Firstname"
                                placeholder="Firstname"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Lastname"
                                placeholder="Lastname"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Bank"
                                placeholder="Bank"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Bank Account"
                                placeholder="Bank Account"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Tel"
                                placeholder="Tel"
                            />
                        </Grid>
                        <Grid>
                            <Input
                                clearable
                                fullWidth
                                color="primary"
                                size="lg"
                                label="Line"
                                placeholder="Line"
                            />
                        </Grid>
                    </Grid.Container>
                    <Spacer />
                    <center> <Text b size={18}> เลือกระดับพันธมิตร </Text> </center>
                    <Spacer />
                    <Grid.Container gap={2} justify="center">
                        <Radio.Group value="1" row>
                            <Radio value="1">
                                Agent<Radio.Description>Agent Level</Radio.Description>
                            </Radio>
                            <Radio value="2">
                                Master<Radio.Desc>Master Level</Radio.Desc>
                            </Radio>
                            <Radio value="3">
                                Senior<Radio.Desc>Senior Level</Radio.Desc>
                            </Radio>
                            <Spacer />
                        </Radio.Group>
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        แก้ไขพันธมิตร
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
