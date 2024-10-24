import { postImage } from '@/src/api/imageAPI';
import { patchGroupById } from '@/src/api/team/teamAPI';
import { useTeamStore } from '@/src/stores/teamStore';
import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import ProfileImageInput from '@components/@shared/ProfileImageInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface EditTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditTeamModal({ isOpen, onClose }: EditTeamModalProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { id, teamName, imageUrl, setTeamName } = useTeamStore();
  // 모달 내부에서 관리할 임시 상태
  const [localTeamName, setLocalTeamName] = useState(teamName);
  const queryClient = useQueryClient();

  // 입력값을 로컬 상태로 업데이트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalTeamName(e.target.value);
  };

  const handleFileChange = (imgFile: File | null) => {
    setImageFile(imgFile);
  };

  // 그룹 수정 Mutation
  const { mutate: editGroup } = useMutation({
    mutationFn: ({
      groupId,
      image,
      name,
    }: {
      groupId: string;
      image: string;
      name: string;
    }) => patchGroupById(groupId, image, name),
    onSuccess: () => {
      onClose();
      console.log(`${teamName} 팀 정보가 성공적으로 수정되었습니다.`);
    },

    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', id] });
    },
    onError: (error) => {
      console.error('그룹 생성 실패:', error);
    },
  });

  // 이미지 업로드 Mutation
  const uploadImageMutate = useMutation({
    mutationFn: (file: File) => postImage(file),
    onSuccess: (imgUrl: string) => {
      // 이미지 URL을 성공적으로 받으면 그룹 수정 요청
      editGroup({ groupId: id, image: imgUrl, name: localTeamName });
    },
    onError: (error) => {
      console.error('이미지 업로드 실패:', error);
    },
  });

  const handlePatchClick = () => {
    setTeamName(localTeamName); // 최종적으로 store에 반영
    if (imageFile) {
      // 새로 선택된 파일이 있으면 업로드
      uploadImageMutate.mutate(imageFile);
    } else {
      // 파일이 없으면 기존 URL로 그룹 수정
      editGroup({ groupId: id, image: imageUrl, name: localTeamName });
    }
  };

  // 모달이 열릴 때 teamName을 로컬 상태에 설정
  useEffect(() => {
    if (isOpen) {
      setLocalTeamName(teamName); // 처음 열릴 때만 초기화
    }
  }, [isOpen, teamName]);

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={onClose}
      array="column"
      padding="default"
      bgColor="primary"
    >
      <p className="mb-[40px] text-center text-2xl-semibold">팀 수정하기</p>
      <p className="mb-[15px] text-lg-medium">팀 프로필</p>
      <ProfileImageInput
        onFileChange={handleFileChange}
        initialFile={imageUrl}
      />
      <p className="mt-[20px] text-lg-medium">팀 이름</p>
      <Input
        placeholder="팀 이름을 입력해주세요."
        inputProps={{
          value: localTeamName,
          onChange: handleChange,
        }}
        className="mb-[30px] mt-[15px]"
      />

      <Modal.Footer>
        <Button size="full" onClick={handlePatchClick}>
          수정하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
