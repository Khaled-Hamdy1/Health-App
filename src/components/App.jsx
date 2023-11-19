import Header from "./Header";
import Card from "./Card";
import { faHeartPulse, faHeartbeat, faLungs } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  calendarContainer: {
    maxWidth: "min(100%, 400px)",
    backgroundColor: "#53d2dc",
    borderRadius: "16px",
  },
}));

export default function App() {
  const heartRateData = {
    title: "Heart Rate",
    value: 75,
    unit: "bpm",
    icon: faHeartbeat,
  };

  const oxygenData = {
    title: "Oxygen Level",
    value: 98,
    unit: "%",
    icon: faLungs,
  };
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const classes = useStyles();
  return (
    <div className="min-h-screen bg-[#26648e]">
      <Header />
      <div className="flex flex-wrap justify-around py-10">
        <div className="min-w-[300px] w-1/3 flex flex-col gap-4 justify-around">
        <Card {...heartRateData} />
        <Card {...oxygenData} />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DemoItem label="Patient History">
              <DateCalendar
                value={value}
                className={classes.calendarContainer}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
}
