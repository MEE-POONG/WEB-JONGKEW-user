import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Grid, Radio, Spacer } from "@nextui-org/react";




export default function ModelCreateAgent({ visible, setVisible }) {
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
                        ระบบสร้างยูสพันธมิตร
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Grid.Container gap={4} justify="center">
                        ต้องการสร้างเอเย่นของ ufruu01 ต้องการสร้างมาสเตอร์ของ ufruu01
                    </Grid.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button auto onClick={closeHandler}>
                        สร้างยูสพันธมิตร
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
