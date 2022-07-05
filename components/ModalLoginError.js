// import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

export default function ModalLoginError({ visible, setVisible }) {
    const closeHandler = () => {
      setVisible(false);
    };
    return (
        <div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        มีบางอย่างผิดพลาด
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    ระบบลงชื่อเข้าใช้ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
