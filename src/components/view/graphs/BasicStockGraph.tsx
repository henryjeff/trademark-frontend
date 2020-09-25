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

export interface BasicStockGraphProps {}

const BasicStockGraph: React.FC<BasicStockGraphProps> = ({}) => {
  const [data, setData] = useState<any>(undefined);
  const [trimmedData, setTrimmedData] = useState<any>(undefined);
  const [dataMin, setDataMin] = useState(0);
  const [dataMax, setDataMax] = useState(1);

  const dataRanges = [
    { name: "1 day", range: 1 },
    { name: "5 days", range: 5 },
    { name: "1 month", range: 30 },
    { name: "6 month", range: 90 },
    { name: "1 year", range: 365 },
    { name: "5 year", range: 1825 },
    { name: "all time", range: 1 },
  ];

  useEffect(() => {
    getData().then((data) => {
      const newData = data.slice(Math.max(data.length - 365, 0));
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

  const showTooltipData = (data: any) => {
    const dataPoint = data.payload[0]?.payload;
    if (!dataPoint) return;
    const price = dataPoint?.close;
    const date = dataPoint?.date;
    const priceNum = Number(price.toFixed(2));
    return (
      <div style={styles.tooltipContainer}>
        <MoneyText
          label={date.toString().split("00:00:00")[0].toUpperCase()}
          amount={priceNum}
          change={priceNum - dataMax}
        />
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <ResponsiveContainer height={"80%"}>
        <LineChart data={data}>
          <Tooltip
            cursor={{
              stroke: colors.gray1,
              strokeWidth: 1,
              strokeDasharray: "4 8",
            }}
            animationDuration={50}
            content={showTooltipData}
          />
          {/* <ReferenceLine
            y={dataMin}
            strokeWidth={0.5}
            stroke={colors.red}
            strokeDasharray={"4 8"}
          />
          <ReferenceLine
            y={dataMax}
            strokeWidth={0.5}
            stroke={colors.green}
            strokeDasharray={"4 8"}
          /> */}
          <Line
            type="monotone"
            dataKey="close"
            strokeWidth={2}
            stroke={colors.white}
            dot={false}
            animationDuration={1000}
            animationEasing="ease"
            // isAnimationActive={false}
          />
          <YAxis
            axisLine={false}
            type="number"
            tick={{ ...styles.yAxisTick }}
            domain={[dataMin - 1, dataMax + 1]}
            ticks={[dataMin, dataMax]}
            tickFormatter={(tick: number) => {
              return `$${tick.toFixed(2)}`;
            }}
          />
          <XAxis axisLine={false} dataKey="date" />
        </LineChart>
      </ResponsiveContainer>
      <div style={styles.ranges}>
        {dataRanges.map((range) => {
          return (
            <div style={styles.button}>
              <Button
                outline
                buttonText={range.name}
                // onClick={() => handleRangeChange(range.range)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    flex: 1,
    height: "100%",
    maxHeight: "100vh",
    boxSizing: "border-box",
    width: "100%",
  },
  ranges: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  yAxisTick: {
    fontSize: 14,
    color: colors.white,
    ...FontStyle.regular,
  },
  tooltipContainer: {
    padding: 8,
    borderRadius: 15,
    backgroundColor: colors.black,
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
  },
};

export default BasicStockGraph;
