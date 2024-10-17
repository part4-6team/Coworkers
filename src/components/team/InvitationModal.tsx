import Button from '@components/@shared/Button';
import { Modal } from '@components/@shared/Modal';

interface InvitationModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function InvitationModal({
  isOpen,
  closeModal,
}: InvitationModalProps) {
  const handleCopyClick = () => {
    console.log('클립보드에 복사 완료!');
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
        <Modal.Header fontColor="primary">멤버 초대</Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <p className="mt-[20px]">그룹에 참여할 수 있는 링크를 복사합니다.</p>
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <Button size="full" onClick={handleCopyClick}>
          링크 복사하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
