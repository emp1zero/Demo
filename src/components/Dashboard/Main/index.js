import React from "react";
import{MainContainer,
MainCards,
MainH1,MainH3,
MainTitle,Card,CardIcon,
CardInner,Charts} from './MainStyles';
import { auth } from '../../../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  LineChart, Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Main = () => {
  const [user]=useAuthState(auth);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    
      <MainContainer>
        <MainTitle>
          <MainH3>Welcome {user?.displayName}</MainH3>
        </MainTitle>
        <MainCards>
          <Card>
            <CardInner>
              <MainH3>PRODUCTS</MainH3>
              <CardIcon>
                <BsFillArchiveFill />
              </CardIcon>
            </CardInner>
            <MainH1>300</MainH1>
          </Card>

          <Card>
            <CardInner>
              <MainH3>CATEGORIES</MainH3>
              <CardIcon>
                <BsFillGrid3X3GapFill />
              </CardIcon>
            </CardInner>
            <MainH1>12</MainH1>
          </Card>

          <Card>
            <CardInner>
              <MainH3>CUSTOMERS</MainH3>
              <CardIcon>
                <BsPeopleFill />
              </CardIcon>
            </CardInner>
            <MainH1>23</MainH1>
          </Card>

          <Card>
            <CardInner>
              <MainH3>ALERTS</MainH3>
              <CardIcon>
                <BsFillBellFill />
              </CardIcon>
            </CardInner>
            <MainH1>42</MainH1>
          </Card>
        </MainCards>
        <Charts>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      </Charts>
      </MainContainer>
     
  );
};

export default Main;
