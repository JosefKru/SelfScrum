import { classNames } from "shared/lib/classNames/classNames";
import style from "./AddTask.module.scss";
import { useState } from "react";
import Button from "shared/ui/Button/Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../../../config/firebase/firestore";

interface AddTaskProps {
  className?: string;
  getBacklog?: () => void;
}

const AddTask = ({ className, getBacklog }: AddTaskProps) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [storyPoints, setStoryPoints] = useState<number>(1);

  const storyPointsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addTask = async () => {
    try {
      const newTask = {
        title,
        desc,
        status: "created",
        storyPoints,
        createdAt: new Date().toLocaleString(),
      };
      await addDoc(collection(db, "Backlog"), newTask);
      setTitle('')
      setDesc('')
      setStoryPoints(1)
      getBacklog();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classNames(style.addTask, {}, [className])}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <select
        value={storyPoints}
        onChange={(e) => setStoryPoints(Number(e.target.value))}
      >
        {storyPointsArray.map((point) => (
          <option key={point} value={point}>
            {point}
          </option>
        ))}
      </select>
      <Button onClick={addTask}>Добавить</Button>
    </div>
  );
};

export default AddTask;