import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { GrAdd } from "react-icons/gr";
import { Box, IconButton } from "@mui/material";

import Todo from "../Todo/Todo";
import Modal from "../Modal/Modal";

import { TodoItemModel } from "../../interfaces/todo.interface";
import { setModalState } from "../../store/todo";
import { TabTitles } from "../../constants/tab";

interface TabPanelProps {
  data: TodoItemModel[];
  tabValue: TabTitles;
}

const TabPanel: FC<TabPanelProps> = (props) => {
  const { data, tabValue } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <Box sx={{ p: 3, textAlign: "center" }}>
        {tabValue === TabTitles.All && (
          <div style={{ display: "flex", marginBottom: 10 }}>
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => {
                dispatch(setModalState({ isModalOpen: true }));
              }}
            >
              <GrAdd fontSize="20px" />
            </IconButton>
          </div>
        )}
        {!data?.length ? <p> Empty :)</p> : <Todo data={data || []} />}
        <Modal />
      </Box>
    </div>
  );
};

export default TabPanel;
