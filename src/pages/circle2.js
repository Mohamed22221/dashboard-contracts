
import React from "react";
import { PieChart, Pie, Cell } from "recharts";


export default function Circle2(props) {
  const {ValueParagraph1 ,ValueParagraph2 ,ValueParagraph3 ,colorParagraph1 ,colorParagraph2 ,colorParagraph3} = props
  const data = [
    { name: "accept", value: ValueParagraph1 },
    { name: "end", value: ValueParagraph2 },
    { name: "Group B", value: ValueParagraph3 },
  
  ];
  
  const COLORS = [colorParagraph1, colorParagraph2, colorParagraph3, "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.8;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <PieChart width={150} height={150}>
      <Pie
        data={data}
        cx={70}
        cy={70}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={60}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
