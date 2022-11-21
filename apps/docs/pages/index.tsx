import { Button, Modal } from "ui";
import { useModal } from "custom-util";

export default function Docs() {
  const { isOpened, close, open } = useModal();

  return (
    <div>
      <h1>docs test</h1>
      <Button color="white" size="md" onClick={open}>
        testButton
      </Button>
      <Modal isOpened={isOpened} onClose={close}>
        test
      </Modal>
    </div>
  );
}
