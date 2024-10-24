import Button from '@components/@shared/Button';
import { Input, ScrollTextArea } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';

interface EditTaskModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditTaskModal({ isOpen, onClose }: EditTaskModal) {
  const handleClick = () => {
    console.log('EditTask 성공');
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
        <Modal.Header array="column" className="gap-3">
          <h1 className="text-lg-medium text-text-primary">할 일 수정하기</h1>
          <p className="text-md-medium text-text-secondary">
            제목과 메모한 내용을{' '}
            <span className="mt-1 flex flex-grow justify-center md:inline">
              변경할 수 있습니다.
            </span>
          </p>
        </Modal.Header>
        <Modal.Content
          array="column"
          fontArray="left"
          fontColor="primary"
          fontSize="14"
          className="gap-4"
        >
          <Input label="할 일 제목" placeholder="제목을 입력해주세요." />
          <ScrollTextArea
            label="할 일 메모"
            placeholder="메모를 입력해주세요."
          />
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <Button size="full" onClick={handleClick}>
          수정하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
