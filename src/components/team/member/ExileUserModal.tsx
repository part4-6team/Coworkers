import { deleteMemberById } from '@/src/api/team/memberAPI';
import { useTeamStore } from '@/src/stores/teamStore';
import Button from '@components/@shared/Button';
import { Modal } from '@components/@shared/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

interface ExileUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberName: string;
  userId: number;
}

interface Group {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId: string;
}

interface Membership {
  userId: number;
  groupId: number;
  userName: string;
  userEmail: string;
  userImage: string | null;
  role: string;
  group: Group;
}

export interface UserData {
  id: number;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  image: string | null;
  teamId: string;
  email: string;
  memberships: Membership[];
}

export default function ExileUserModal({
  isOpen,
  onClose,
  memberName,
  userId,
}: ExileUserModalProps) {
  const { id } = useTeamStore();
  const queryClient = useQueryClient();

  // 'user' 키로 캐싱된 유저 데이터 가져오기
  const userData = queryClient.getQueryData<UserData>(['user']);

  // 멤버 삭제 Mutation
  const { mutate: deleteMember } = useMutation({
    mutationFn: ({ groupid, userid }: { groupid: string; userid: number }) =>
      deleteMemberById(groupid, userid),
    onSuccess: () => {
      console.log('멤버 정보 삭제 완료!');
      onClose();
    },
    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', id] });
    },
    onError: (error) => {
      console.error('멤버 삭제 실패:', error);
    },
  });

  // 팀 관리자만 삭제 가능
  const isAdmin =
    userData &&
    userData.memberships.find((m) => m.groupId === Number(id))?.role ===
      'ADMIN';
  // 본인 삭제 불가 체크
  const isSelf = userData && userData.id === userId;

  const handleDeleteClick = () => {
    // 팀 관리자만 삭제 가능
    if (!isAdmin) {
      return;
    }

    // 본인 삭제 불가 체크
    if (isSelf) {
      return;
    }

    deleteMember({ groupid: id as string, userid: userId as number });
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
        <Modal.Header
          fontColor="primary"
          className="flex flex-col items-center gap-[16px]"
        >
          <Image
            src="/icons/alert.svg"
            alt="경고 아이콘"
            width={24}
            height={24}
          />
          {isAdmin && !isSelf && (
            <span>{memberName} 유저를 삭제하시겠어요?</span>
          )}
          {!isAdmin && <span>권한 없음</span>}
        </Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          {isAdmin && !isSelf && (
            <p className="mt-[20px]">
              팀 내에서 멤버를 삭제합니다. 정말로 진행하시겠습니까?
            </p>
          )}
          {!isAdmin && (
            <p className="mt-[20px]">관리자만 삭제할 수 있습니다.</p>
          )}
          {isAdmin && isSelf && (
            <p className="mt-[20px]">본인은 삭제할 수 없습니다.</p>
          )}
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
          {isAdmin && !isSelf && (
            <Button size="full" bgColor="red" onClick={handleDeleteClick}>
              삭제
            </Button>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  );
}
