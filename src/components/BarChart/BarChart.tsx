import React, { FC } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

import { generateStatistics } from "../../utils/timeUtils";
import { TodoItemModel } from "../../interfaces/todo.interface";

type PropsT = {
  data: TodoItemModel[];
};

const BarChartWidget: FC<PropsT> = ({ data }) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={generateStatistics(data)}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis padding={{ left: 10 }} dataKey="name" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartWidget;
