import Header from "./Header";
import Card from "./Card";
import {
  faHeartbeat,
  faLungs,
  faTemperatureFull,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import useGoogleSheetData from "../hooks/useGoogleSheetData";

export default function App() {
  const API_KEY = "AIzaSyAg_0U3GY6YvuiZTabTyFojHBYb8SjIKcI";
  const SPREADSHEET_ID = "176A6OYUNa5Zz3lqjYkscXZKAu3cV2lcGAldR6pOA1QQ";
  const SPREADSHEET_NAME = "HB";

  const lastValue = useGoogleSheetData(
    API_KEY,
    SPREADSHEET_ID,
    SPREADSHEET_NAME
  );
  const [value, setValue] = useState(dayjs(new Date()));

  console.log(lastValue);
  const heartRateData = {
    title: "Heart Rate",
    value: lastValue !== null ? lastValue[0] : "Loading...",
    unit: "bpm",
    icon: faHeartbeat,
    loaded: lastValue === null,
  };

  const oxygenData = {
    title: "Oxygen Level",
    value: lastValue !== null ? lastValue[1] : "Loading...",
    unit: "%",
    icon: faLungs,
    loaded: lastValue === null,
  };
  return (
    <div className="min-h-screen bg-[#26648e]">
      <Header />
      <div className="flex flex-wrap justify-around py-10 gap-4">
        <div className="min-w-[300px] w-1/3 flex flex-col gap-4 justify-around">
          <Card {...heartRateData} />
          <Card {...oxygenData} />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DemoItem label="Patient History">
              <DateCalendar
                value={value}
                className="max-w-[400px] bg-[#53d2dc] rounded-2xl"
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}
