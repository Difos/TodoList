import { RadioButton, Trash } from "phosphor-react";
import style from "./Task.module.css";

export interface ITask {
  id?: string;
  content: string;
  isCheck?: boolean;
  createdAt?: Date;
}

export interface ITaskProps {
  task:ITask;
  onCheckTask:(id:string) => void;
  onTaskToDelete:(id:string) => void;
}

export function Task({ task, onCheckTask,onTaskToDelete }: ITaskProps) {
 
  function handleChecked() {
    
    onCheckTask(String(task.id))
  }

  function handleDeleteTask(){
    onTaskToDelete(String(task.id))
  }

  return (
    <div className={style.task}>
      <input type="checkbox" onClick={handleChecked}></input>
      <p>{task.content}</p>
      <button onClick={handleDeleteTask} title="Deletar comentário">
        <Trash size={24} />
      </button>
    </div>
  );
}
