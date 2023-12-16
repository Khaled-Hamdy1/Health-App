import Header from "./Header";
import Card from "./Card";
import { faHeartbeat, faLungs } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";
// import useGoogleSheetData from "../hooks/useGoogleSheetData";
import useGetUserData from "../hooks/useGetUserData";

export default function App() {
  // define the data states
  const [heartRate, setHeartRate] = useState(0);
  const [oxygenLevel, setOxygenLevel] = useState(0);
  const [fullName, setFullName] = useState("Ashish");
  const [loaded, setLoaded] = useState(true);
  // get data from api
  const { data, loading } = useGetUserData();
  useEffect(() => {
    if (!loading) {
      setHeartRate(data.heart_rate);
      setOxygenLevel(data.blood_oxygen);
      setFullName(data.full_name);
      setLoaded(false);
    }
  }, [loading, data]);

  const [value, setValue] = useState(dayjs(new Date()));
  console.log(value.date(), value.month(), value.year());
  const heartRateData = {
    title: "Heart Rate",
    value: heartRate,
    unit: "bpm",
    icon: faHeartbeat,
    loaded: loaded,
  };

  const oxygenData = {
    title: "Oxygen Level",
    value: oxygenLevel,
    unit: "%",
    icon: faLungs,
    loaded: loaded,
  };
  return (
    <div className="min-h-screen bg-[#26648e]">
      <Header fullName={fullName} />
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
