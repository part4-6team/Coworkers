import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getGroupById } from '@/src/api/team/teamAPI';
import TeamBanner from '@components/team/banner/TeamBanner';
import TaskList from '@components/team/taskList/TaskList';
import Report from '@components/team/Report';
import MemberList from '@components/team/member/MemberList';
import { useTeamStore } from '@/src/stores/teamStore';
import { useEffect } from 'react';

export default function TeamPage() {
  const router = useRouter();
  const { teamid } = router.query;

  const teamIdString = Array.isArray(teamid) ? teamid[0] : teamid;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['group', teamIdString],
    queryFn: () => getGroupById(teamIdString as string),
  });
  const { setTeamData } = useTeamStore();

  useEffect(() => {
    if (data) {
      // 팀 데이터를 Zustand 스토어에 저장
      setTeamData(data);
    }
  }, [data, setTeamData]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <main className="mx-auto mb-[30px] mt-[20px] w-full min-w-[340px] px-[10px] xl:w-[1200px] xl:px-0">
      <TeamBanner />
      <TaskList />
      <Report />
      <MemberList />
    </main>
  );
}
