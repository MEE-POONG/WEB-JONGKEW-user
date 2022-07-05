import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Grid, Radio, Spacer } from "@nextui-org/react";




export default function ModelEditAgent({ visible, setVisible }) {
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <div>
            <Modal
                closeButton
                blur

                width="600px"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        ระบบแก้ไขข้อมูลเอเย่น
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4} justify="center">
                        <Grid>
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
                        แก้ไขเอเย่น
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
