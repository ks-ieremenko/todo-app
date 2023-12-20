import React, { FC, Fragment } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

import Checkbox from "../Checkbox/Checkbox";
import Paper from "../Paper/Paper";

import { deleteTodosThunk, updateTodoThunk } from "../../store/todo/todo.thunk";
import { TodoItemModel } from "../../interfaces/todo.interface";
import { Priority, priorityColors } from "../../constants/todo";
import { setModalState } from "../../store/todo";

import styles from "./Todo.module.scss";
import moment from "moment";

type PropsT = {
  data: Array<TodoItemModel>;
};

const Todo: FC<PropsT> = ({ data }) => {
  const dispatch = useDispatch();

  const updateTodo = (todo: TodoItemModel) => {
    const date = todo.completed ? null : moment().format('YYYY-MM-DD');
    dispatch(updateTodoThunk({ ...todo, completed: !todo.completed, date }));
  };

  const deleteTodo = (id: string) => dispatch(deleteTodosThunk(id));

  const openModal = (todo: TodoItemModel) => {
    dispatch(setModalState({ isModalOpen: true, updatedTodo: todo }));
  };
  return (
    <div>
      {data &&
        data.map((item) => {
          const { backgroundColor, color } = priorityColors[item.priority as Priority];
          return (
            <Fragment key={item.id}>
              <Paper elevation={3} onClick={() => updateTodo(item)}>
                <Checkbox checked={item.completed} />
                <div style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.description}</div>
                <div className={styles.buttonContainer} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.priority} style={{ backgroundColor, color }}>
                    {item.priority}
                  </div>
                  <IconButton onClick={() => openModal(item)}>
                    <FaRegEdit />
                  </IconButton>
                  <IconButton onClick={() => deleteTodo(item.id)}>
                    <RiDeleteBinLine />
                  </IconButton>
                </div>
              </Paper>
            </Fragment>
          );
        })}
    </div>
  );
};

export default Todo;
