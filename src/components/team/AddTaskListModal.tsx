import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';

interface AddTaskListModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function AddTaskListModal({
  isOpen,
  closeModal,
}: AddTaskListModalProps) {
  const handleAddClick = () => {
    console.log('할 일 목록 추가 완료!');
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={closeModal}
      array="column"
      padding="default"
      bgColor="primary"
      fontSize="16"
      fontArray="center"
      gap="40"
    >
      <Modal.Wrapper array="column">
        <Modal.Header fontColor="primary">할 일 목록</Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <Input className="mt-[30px]" placeholder="목록 명을 입력해주세요." />
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <Button size="full" onClick={handleAddClick}>
          만들기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
