import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./AddTask.module.css";
import { TaskOverview } from "./TaskOverview";

import {v4 as uuidv4} from 'uuid';

import paper from "../img/paper.png";

import { ITask, Task } from "./Task";

export function AddTask() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [newTasks, setNewTasks] = useState<ITask>({ id: '1', content: "teste" });

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTasks]);
    setNewTasks({ id: '1', content: "teste" });
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    const t: ITask = {
      id: uuidv4(),
      content: event.target.value,
      isCheck: false,
      createdAt: new Date(),
    };

    setNewTasks(t);
    
  }

  function onCheckTask(id:string) {
    
    const checkedTask = tasks.filter(t =>{
      if(t.id === id){
        t.isCheck = !t.isCheck
        return t
      }
    })

    const allTask = tasks.filter(t => {
      if((t.id) !== id){
        
        return t
      }
    })
    
    console.log(tasks)
     setTasks([...allTask,checkedTask[0]]);
     
  }

  function onDeleteTask(id:string){
    const taskToDelete = tasks.filter(task=>{
      return (task.id) !== id
    })

    setTasks(taskToDelete)
  }

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.commentForm}>
        <div>
          <textarea
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
          />

          <footer>
            <button type="submit">Criar</button>
          </footer>
        </div>
      </form>
      <div>

        <TaskOverview total={tasks.length} checkedTask={tasks.filter(task=> {
          return task.isCheck == true
        }).length}/>


        {tasks.length <= 0 ? (
          <div className={styles.emptyTask}>
            <img src={paper}></img>
            <span>
              Você ainda não tem tarefas cadastradas <br />
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        ) : (
          tasks.map((task) => {
            return <Task 
                        key={task.id} 
                        task={task}
                        onCheckTask={onCheckTask}
                        onTaskToDelete={onDeleteTask}
                       />;
          })
        )}
      </div>
    </article>
  );
}
