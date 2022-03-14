import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { TiThSmall, TiTick } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";

import HeaderTab from "./HeaderTab";
import Tabs from "./Tabs";
import TabPanel from "./TabPanel";
import Modal from "../Modal/Modal";

import { TabTitles } from "../../constants/tab";
import { getTodosThunk } from "../../store/todo/todo.thunk";
import { AppState } from "../../store/configureStore";
import { TodoItemModel } from "../../interfaces/todo.interface";
import { TabHeaderModel, TabPanelModel } from "../../interfaces/tab.interface";

import styles from "./Tab.module.scss";
import BarChartWidget from "../BarChart/BarChart";

const tabHeaderConfig: TabHeaderModel[] = [
  { value: TabTitles.All, icon: <TiThSmall /> },
  { value: TabTitles.Planned, icon: <BiTimeFive /> },
  { value: TabTitles.Completed, icon: <TiTick /> },
];

const CustomizedTabs: FC = () => {
  const [tabValue, setTabValue] = useState(TabTitles.All);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  const { todos, item } = useSelector((state: AppState) => state.todoReducer);

  const handleTabChange = (event: SyntheticEvent, newTabValue: TabTitles) => {
    setTabValue(newTabValue);
  };

  const getFilteredData = (completed: boolean): TodoItemModel[] => {
    return todos?.filter((item: TodoItemModel) => item.completed === completed);
  };

  const tabPanelConfig: TabPanelModel[] = [
    { value: TabTitles.All, data: todos },
    { value: TabTitles.Planned, data: getFilteredData(false) },
    { value: TabTitles.Completed, data: getFilteredData(true) },
  ];

  return (
    <Box className={styles.box}>
      <p className={styles.title}>Todo App</p>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        {tabHeaderConfig.map((item) => (
          <HeaderTab value={item.value} icon={item.icon} key={item.value} />
        ))}
      </Tabs>
      {todos &&
        tabPanelConfig.map(
          (item: TabPanelModel) =>
            tabValue === item.value && <TabPanel tabValue={tabValue} data={item.data} key={item.value} />
        )}
      {item && <Modal item={item} />}
      {todos && tabValue === TabTitles.Completed && <BarChartWidget data={getFilteredData(true)} />}
    </Box>
  );
};

export default CustomizedTabs;
