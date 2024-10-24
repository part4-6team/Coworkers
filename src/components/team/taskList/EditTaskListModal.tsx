import { patchTaskList } from '@/src/api/tasks/taskListAPI';
import { useTeamStore } from '@/src/stores/teamStore';
import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface EditTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTaskListName?: string;
  taskListId: number;
}

export default function EditTaskListModal({
  isOpen,
  onClose,
  initialTaskListName = '',
  taskListId,
}: EditTaskListModalProps) {
  const [TaskListName, setTaskListName] = useState(initialTaskListName);
  const { id } = useTeamStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskListName(e.target.value);
  };

  // 모달이 닫힐 때 TaskListName을 초기값으로 리셋
  useEffect(() => {
    if (!isOpen) {
      setTaskListName(initialTaskListName);
    }
  }, [isOpen, initialTaskListName]);

  const queryClient = useQueryClient();

  // 할 일 목록 수정 Mutation
  const { mutate: editGroup } = useMutation({
    mutationFn: ({
      groupId,
      taskListId,
      name,
    }: {
      groupId: number;
      taskListId: string;
      name: string;
    }) => patchTaskList(groupId, taskListId, name),
    onSuccess: () => {
      onClose();
      console.log(`${TaskListName} 팀 정보가 성공적으로 수정되었습니다.`);
    },

    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', id] });
    },
    onError: (error) => {
      console.error('그룹 생성 실패:', error);
    },
  });

  const handlePatchClick = () => {
    editGroup({
      groupId: Number(id),
      taskListId: String(taskListId),
      name: TaskListName,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      isXButton
      onClose={onClose}
      array="column"
      padding="default"
      bgColor="primary"
    >
      <Modal.Header
        fontColor="primary"
        className="mb-[20px] flex flex-col items-center"
      >
        할 일 목록
      </Modal.Header>
      <Input
        placeholder="목록 명을 입력해주세요."
        inputProps={{
          value: TaskListName,
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
