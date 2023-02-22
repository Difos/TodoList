import style from "./TaskOverview.module.css";



interface ITaskOverView {
  total?:number;
  checkedTask:number;
}

export function TaskOverview({total, checkedTask}:ITaskOverView) {

  return (
    <article>
      <div className={style.info}>
        <p>
          Tarefas Criadas <span>{total}</span>
        </p>
        <p>
          Concluidas <span>{checkedTask} de {total}</span>
        </p>
      </div>

      <div className={style.taskOverview}>
       
      </div>
    </article>
  );
}
