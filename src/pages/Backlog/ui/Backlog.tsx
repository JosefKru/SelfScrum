import { useEffect, useState } from "react";
import { db } from "./../../../../config/firebase/firestore";
import {
  collection,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import Button from "shared/ui/Button/Button";

export interface Task {
  createdAt: string;
  desc: string;
  id: string;
  status: string;
  storyPoints: number;
  title: string;
}

const Backlog = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getBacklog = async () => {
    const querySnapshot = await getDocs(collection(db, "Backlog"));
    const backlog = querySnapshot.docs.map(
      (doc: QueryDocumentSnapshot<DocumentData>) => ({
        id: doc.id,
        ...doc.data(),
      })
    ) as Task[];
    setTasks(backlog);
  };

  const addTask = async () => {
    try {
      const newTask = {
        title: "Tokyo",
        desc: "Japan",
        status: "Hey",
        storyPoints: 5,
        createdAt: "12",
      };
      await addDoc(collection(db, "Backlog"), newTask);
      getBacklog();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const [task] = tasks.filter((task) => task.id === id);
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
        createdAt: "124444",
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
    <div>
      <h2>Backlog</h2>
      <Button onClick={addTask}>add</Button>
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

export default Backlog;
