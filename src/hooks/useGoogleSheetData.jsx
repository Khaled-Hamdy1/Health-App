/* eslint-disable no-undef */
import { useEffect, useState } from "react";

export default function useGoogleSheetData() {
  const [lastValue, setLastValue] = useState(null);

  const API_KEY = "AIzaSyAg_0U3GY6YvuiZTabTyFojHBYb8SjIKcI";
  const SPREADSHEET_ID = "176A6OYUNa5Zz3lqjYkscXZKAu3cV2lcGAldR6pOA1QQ";
  const SPREADSHEET_NAME = "HB";
  
  useEffect(() => {
    // const int = setInterval(() => {
      const loadGoogleApi = async () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://apis.google.com/js/api.js";

          script.onload = () => {
            window.gapi.load("client", resolve);
          };
          document.head.appendChild(script);
        });
      };

      const fetchData = async () => {
        await loadGoogleApi();

        try {
          await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [
              "https://sheets.googleapis.com/$discovery/rest?version=v4",
            ],
          });

          const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: SPREADSHEET_NAME,
          });

          const values = response.result.values;
          if (values.length > 0) {
            // Assuming the last value is in the last row
            const lastRow = values.length - 1;

            setLastValue(values[lastRow]);
          } else {
            console.log("No data found.");
          }
        } catch (error) {
          console.error("Error:", error.result.error.message);
        }
      };
      fetchData();
    // }, 1000);
    // return () => clearInterval(int);
  }, [API_KEY, SPREADSHEET_ID, SPREADSHEET_NAME]);
  const userData = {
    heart_rate: lastValue?.[0],
    oxygen_level: lastValue?.[1],
    full_name: "Ashraf Mohamed",
  }
  return userData;
}
