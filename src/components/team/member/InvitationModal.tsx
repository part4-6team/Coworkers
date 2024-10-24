import Button from '@components/@shared/Button';
import { Modal } from '@components/@shared/Modal';
import { inviteMember } from '@/src/api/team/memberAPI';
import { useQuery } from '@tanstack/react-query';
import { useTeamStore } from '@/src/stores/teamStore';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvitationModal({
  isOpen,
  onClose,
}: InvitationModalProps) {
  const { id } = useTeamStore();

  const { data } = useQuery({
    queryKey: ['inviteMember', id],
    queryFn: () => inviteMember(Number(id)),
  });

  const handleCopyClick = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('복사한 토큰: ', data);
      })
      .catch((err) => {
        console.error('복사에 실패했습니다!: ', err);
      });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={onClose}
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
        <Button size="full" onClick={() => handleCopyClick(data)}>
          링크 복사하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
