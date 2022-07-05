import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Grid, Radio, Spacer } from "@nextui-org/react";




export default function ModelOpenAgent({ visible, setVisible }) {
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
                        ยืนยันเปิด / ปิดใช้งาน
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4} justify="center">
                        <Input
                            clearable
                            fullWidth
                            color="primary"
                            size="lg"
                            label="ระบุยอด"
                            placeholder="ระบุยอด"
                        />
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
