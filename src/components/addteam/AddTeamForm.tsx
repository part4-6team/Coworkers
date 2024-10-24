import { postImage } from '@/src/api/imageAPI';
import { postGroupById } from '@/src/api/team/teamAPI';
import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import ProfileImageInput from '@components/@shared/ProfileImageInput';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AddTeamForm() {
  const [teamName, setTeamName] = useState('');
  const [teamProfileFile, setTeamProfileFile] = useState<File | null>(null);
  const router = useRouter();

  // 팀 생성 Mutation
  const { mutate: addTeam } = useMutation({
    mutationFn: ({ image, name }: { image: string; name: string }) =>
      postGroupById(image, name),
    onSuccess: (data) => {
      const teamId = data.id; // 팀 ID
      setTeamName('');
      setTeamProfileFile(null);
      console.log(`${teamName}팀(아이디: ${teamId})이 생성되었습니다.`);
      // 팀 생성 후 해당 팀 페이지로 리디렉트
      if (teamId) {
        router.push(`/${teamId}`);
      }
    },
    onError: (error) => {
      console.error('팀 생성 실패:', error);
    },
  });

  // 이미지 업로드 Mutation
  const uploadImageMutate = useMutation({
    mutationFn: (file: File) => postImage(file),
    onSuccess: (imageUrl: string) => {
      // 이미지 URL을 성공적으로 받으면 팀 생성 요청
      addTeam({ image: imageUrl, name: teamName });
    },
    onError: (error) => {
      console.error('이미지 업로드 실패:', error);
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleFileChange = (file: File | null) => {
    setTeamProfileFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (teamProfileFile && teamName) {
      uploadImageMutate.mutate(teamProfileFile); // 이미지 업로드 시작
    }
  };

  return (
    <form className="flex w-[343px] flex-col gap-10 md:w-[460px]">
      <div className="flex w-[343px] flex-col items-center gap-6 md:w-[460px] md:gap-[80px]">
        <h1 className="text-2xl-medium xl:text-4xl">팀 생성하기</h1>
        <div className="flex w-full flex-col gap-6">
          <div>
            <div className="mb-3 text-lg-medium">팀 프로필</div>
            <ProfileImageInput onFileChange={handleFileChange} />
          </div>
          <Input
            label="팀 이름"
            placeholder="팀 이름을 입력해주세요."
            inputProps={{
              value: teamName,
              onChange: handleNameChange,
            }}
          />
        </div>
      </div>
      <Button size="full" onClick={handleSubmit}>
        생성하기
      </Button>
    </form>
  );
}
