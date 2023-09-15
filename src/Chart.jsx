import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const options = {
  colors: ["#FCB9AA", "#55CBCD"], // 차트 색상 변경
  chart: {
    type: "line",
    width: 600,
    height: 400,
    backgroundColor: "#F7F7F7",
    borderWidth: 2, // 테두리 두께
    borderColor: "#C6DBDA", // 테두리 색상
    borderRadius: 5, // 테두리 모서리 둥글기
    shadow: {
      color: "rgba(0, 0, 0, 0.5)", // 반투명한 검은색 그림자
      offsetX: 3, // 3픽셀 오른쪽으로 오프셋
      offsetY: 3, // 3픽셀 아래로 오프셋
      opacity: 0.8, // 그림자의 투명도
      width: 5, // 그림자의 너비
    },
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "Line Chart",
  },
  xAxis: {
    categories: ["월", "화", "수", "목", "금", "토", "일"],
  },
  yAxis: {
    min: 0,
    max: 10,
    tickInterval: 1,
    title: {
      text: "사용자 수",
    },
  },
  series: [
    {
      name: "Line 1",
      data: [1, 2, 1, 4, 3, 6, 8],
    },
    {
      name: "Line 2",
      data: [2, 4, 5, 2, 7, 1, 3],
    },
  ],
};

const Chart = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        console.log("response", response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
