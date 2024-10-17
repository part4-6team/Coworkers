import { useModal } from '@hooks/useModal';
import MemberBox from './MemberBox';
import InvitationModal from './InvitationModal';

interface MemberProps {
  role: string;
  userImage: string | null;
  userEmail: string;
  userName: string;
  groupId: number;
  userId: number;
}

interface MemberListProps {
  members: MemberProps[];
}

export default function MemberList({ members }: MemberListProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const memberCount = members.length;
  return (
    <div>
      <div className="my-[20px]">
        <div className="flex justify-between">
          <div className="flex gap-[10px]">
            <p className="text-lg-medium">멤버</p>
            <p className="text-lg-regular text-text-default">
              ({memberCount}명)
            </p>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="cursor-pointer text-md-regular text-brand-primary"
          >
            +새로운 멤버 초대하기
          </button>
          <InvitationModal isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 md:gap-[24px]">
        {members.map((member) => (
          <MemberBox
            key={member.userId}
            userName={member.userName}
            userEmail={member.userEmail}
            userImage={member.userImage}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}
