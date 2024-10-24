import Image from 'next/image';
import Button from '@components/@shared/Button';
import { Modal } from '@components/@shared/Modal';

interface DeleteTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskName: string;
}

export default function DeleteTaskModal({
  isOpen,
  onClose,
  taskName,
}: DeleteTaskModalProps) {
  const handleClick = () => {
    console.log('DeleteTask 성공');
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
      fontArray="center"
      gap="24"
    >
      <Modal.Wrapper array="column" className="gap-3">
        <Modal.Header
          fontSize="16"
          fontColor="primary"
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/icons/alert.svg"
            alt="경고 아이콘"
            width={24}
            height={24}
          />
          <p className="leading-normal">
            &apos;{taskName}&apos; <br />할 일을 정말 삭제하시겠어요?
          </p>
        </Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <p>삭제 후에는 되돌릴 수 없습니다.</p>
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <div className="flex gap-[8px]">
          <Button
            size="full"
            bgColor="white"
            fontColor="gray"
            onClick={onClose}
          >
            취소
          </Button>
          <Button size="full" bgColor="red" onClick={handleClick}>
            삭제하기
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
