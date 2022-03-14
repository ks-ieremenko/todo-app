import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import { useFormik } from "formik";

import Form from "../Form/Form";

import { setModalState } from "../../store/todo";
import { AppState } from "../../store/configureStore";
import { createTodoThunk, updateTodoThunk } from "../../store/todo/todo.thunk";
import { TodoItemModel } from "../../interfaces/todo.interface";
import { todoValidationSchema } from "../../constants/todo";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

type PropsT = {
  item?: TodoItemModel;
};

const StyledModal: FC<PropsT> = ({ item }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalState({ isModalOpen: false }));
  };
  const formik = useFormik({
    initialValues: {
      description: item?.description || "",
      priority: item?.priority || "",
    },
    validationSchema: todoValidationSchema,
    onSubmit: (values, actions) => {
      if (item) {
        dispatch(updateTodoThunk({ ...item, ...values } as TodoItemModel));
      } else {
        dispatch(
          createTodoThunk({
            id: new Date().getTime().toString(16),
            completed: false,
            ...values,
          } as TodoItemModel)
        );
        actions.resetForm();
      }
      handleClose();
    },
  });

  const { isModalOpen } = useSelector((state: AppState) => state.todoReducer);

  return (
    <Modal
      open={isModalOpen}
      onClose={(e) => {
        handleClose();
        formik.handleReset(e);
      }}
    >
      <Box sx={style}>
        <Form formik={formik} />
      </Box>
    </Modal>
  );
};

export default StyledModal;
