import Header from "./Header";
import Card from "./Card";
import { faHeartbeat, faLungs } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
// import useGoogleSheetData from "../hooks/useGoogleSheetData";
import useGetUserData from "../hooks/useGetUserData";
import emailJs from "../services/emailJs";

const heartRateData = {
  title: "Heart Rate",
  unit: "bpm",
  icon: faHeartbeat,
};

const oxygenData = {
  title: "Oxygen Level",
  unit: "%",
  icon: faLungs,
};

export default function App() {
  // define the data states
  const [date, setDate] = useState(dayjs(new Date()));
  // get data from api
  const { data, loading } = useGetUserData();

  console.log(date.date(), date.month(), date.year());

  const emailData = {
    user_name: "khaled",
    user_email: "tarboun.awm@gmail.com",
    message: "Elmail eshtagal ya gamed ya fashe5 ya hacker ya metarsham",
  };

  return (
    <div className="min-h-screen bg-[#26648e]">
      <Header fullName={data?.full_name} />
      <div className="flex flex-wrap justify-around py-10 gap-4">
        <div className="min-w-[300px] w-1/3 flex flex-col gap-4 justify-around">
          <Card {...{ ...heartRateData, value: data?.heart_rate, loading }} />
          <Card {...{ ...oxygenData, value: data?.heart_rate, loading }} />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DemoItem label="Patient History">
              <DateCalendar
                value={date}
                className="max-w-[400px] bg-[#53d2dc] rounded-2xl"
                onChange={(newValue) => setDate(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>emailJs(emailData)}
      >
        Click
      </button>
    </div>
  );
}
