import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';

interface AddTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTaskListModal({
  isOpen,
  onClose,
}: AddTaskListModalProps) {
  const handleClick = () => {
    console.log('AddTaskList 성공');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={onClose}
      array="column"
      padding="default"
      bgColor="secondary"
      fontSize="16"
      fontArray="center"
      gap="24"
    >
      <Modal.Wrapper array="column" gap="24">
        <Modal.Header array="column" className="gap-2">
          <h1 className="text-lg-medium text-text-primary">새로운 목록 추가</h1>
          <p className="text-md-medium leading-normal text-text-secondary">
            할 일에 대한 목록을 추가하고 <br />
            목록별 할 일을 만들 수 있습니다.
          </p>
        </Modal.Header>
        <Modal.Content fontArray="left" fontColor="primary">
          <Input label="목록 이름" placeholder="목록 이름을 입력해주세요." />
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <Button size="full" onClick={handleClick}>
          만들기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
