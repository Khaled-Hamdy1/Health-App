/* eslint-disable no-undef */
import { useEffect, useState } from "react";

export default function useGoogleSheetData(
  API_KEY,
  SPREADSHEET_ID,
  SPREADSHEET_NAME
) {
  const [lastValue, setLastValue] = useState(null);

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
  return lastValue;
}
