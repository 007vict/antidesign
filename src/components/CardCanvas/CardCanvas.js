import React, {useEffect, useState} from "react";
import {Card} from "antd";
import { Radar } from '@ant-design/plots';

export const CardCanvas = () => {

  const DemoRadar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);

    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      xField: 'item',
      yField: 'score',
      seriesField: 'user',
      meta: {
        score: {
          alias: '分数',
          min: 0,
          max: 80,
        },
      },
      xAxis: {
        line: null,
        tickLine: null,
        grid: {
          line: {
            style: {
              lineDash: null,
            },
          },
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
    };

    return <Radar height={300} {...config} />;
  };

  return (
    <Card title={'Canvas'}>
      <DemoRadar />
    </Card>
  )
}