import { classNames } from "shared/lib/classNames/classNames";
import style from "./TaskList.module.scss";
import { useEffect } from "react";
import { db } from "./../../../../config/firebase/firestore";
import {
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import Button from "shared/ui/Button/Button";

interface TaskListProps {
  className?: string;
  tasks?: Task[];
  getBacklog?: () => void
}

export interface Task {
  createdAt: string;
  desc: string;
  id: string;
  status: string;
  storyPoints: number;
  title: string;
}

const TaskList = ({ className, tasks, getBacklog }: TaskListProps) => {

  const deleteTask = async (id: string) => {
    try {
      await deleteDoc(doc(db, "Backlog", id));
      getBacklog();
    } catch (error) {
      console.log(error);
    }
  };

  const setTask = async (id: string) => {
    try {
      await setDoc(doc(db, "Backlog", id), {
        title: "Los Angeles",
        desc: "CA",
        status: "USA",
        storyPoints: 10,
        createdAt: new Date().toLocaleString(),
      });
      getBacklog();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBacklog();
  }, []);
  
  return (
    <div className={classNames(style.taskList, {}, [className])}>
      {tasks.map((task) => (
        <div key={task.id}>
          <div>Задача: {task.title}</div>
          <div>Описание: {task.desc}</div>
          <div>Статус: {task.status}</div>
          <div>Сложность: {task.storyPoints}</div>
          <div>Создана: {task.createdAt}</div>
          <Button onClick={() => deleteTask(task.id)}>ДЕЛЕТЕ</Button>
          <Button onClick={() => setTask(task.id)}>SET </Button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
