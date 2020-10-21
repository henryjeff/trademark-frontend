import React, { useState, useEffect } from "react";
import { Text } from "../../general";
import { Button } from "../../button";
import { BorderStyle, FontStyle, StyleSheet } from "../../../constants/Styles";
import { getData } from "./GraphUtil";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";
import colors from "../../../constants/Colors";
import MoneyText from "../../general/MoneyText";

export interface SmallStockGraphProps {
  color?: string;
  renderDelay?: number;
}

const SmallStockGraph: React.FC<SmallStockGraphProps> = ({
  color,
  renderDelay,
}) => {
  const [data, setData] = useState<any>(undefined);
  const [dataMin, setDataMin] = useState(0);
  const [dataMax, setDataMax] = useState(1);

  useEffect(() => {
    getData().then((data) => {
      const newData = data.slice(Math.max(data.length - 90, 0));
      // const newData = data;
      setDataMin(
        newData.reduce(
          (min, p) => (p.close < min ? p.close : min),
          newData[0].close
        )
      );
      setDataMax(
        newData.reduce(
          (max, p) => (p.close > max ? p.close : max),
          newData[0].close
        )
      );
      setData(newData);
    });
  }, []);

  if (!data) return <div />;

  return (
    <ResponsiveContainer width="99%" height={"100%"}>
      <LineChart margin={{ top: 0, bottom: 0, left: 0, right: 0 }} data={data}>
        <Line
          type="monotone"
          dataKey="close"
          strokeWidth={2}
          stroke={color || colors.white}
          dot={false}
          animationBegin={renderDelay || 0}
          animationDuration={1000}
          animationEasing="ease"
        />
        <YAxis
          axisLine={false}
          orientation={"right"}
          width={0}
          // type="number"
          domain={[dataMin, dataMax]}
          tick={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SmallStockGraph;
