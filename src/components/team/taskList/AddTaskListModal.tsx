import { postTaskList } from '@/src/api/tasks/taskListAPI';
import Button from '@components/@shared/Button';
import { Input } from '@components/@shared/Input';
import { Modal } from '@components/@shared/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface AddTaskListModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
}

export default function AddTaskListModal({
  isOpen,
  onClose,
  groupId,
}: AddTaskListModalProps) {
  const [taskListName, setTaskListName] = useState('');
  const newGroupId = Number(groupId);
  const queryClient = useQueryClient();

  // 그룹 생성 Mutation
  const { mutate: createTaskList } = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      postTaskList(id, name),
    onSuccess: () => {
      setTaskListName('');
      onClose();
    },
    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', groupId] });
    },
    onError: (error) => {
      console.error('목록 생성 실패:', error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskListName(e.target.value);
  };

  const handleAddClick = () => {
    if (taskListName) {
      createTaskList({ id: newGroupId, name: taskListName });
    }
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
        <Modal.Header fontColor="primary">할 일 목록</Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <Input
            onChange={handleChange}
            className="mt-[30px]"
            placeholder="목록 명을 입력해주세요."
          />
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <Button size="full" onClick={handleAddClick}>
          만들기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
