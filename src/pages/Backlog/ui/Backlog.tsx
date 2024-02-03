import { AddTask } from "features/AddTask";
import { db } from "./../../../../config/firebase/firestore";
import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useState } from "react";
import { TaskList } from "widgets/TaskList";
import { Task } from "widgets/TaskList/ui/TaskList";

const Backlog = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getBacklog = async () => {
    try {
      const q = query(collection(db, "Backlog"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const newTasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[];
      setTasks(newTasks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Backlog</h2>
      <AddTask getBacklog={getBacklog} />
      <TaskList tasks={tasks} getBacklog={getBacklog} />
    </div>
  );
};

export default Backlog;
