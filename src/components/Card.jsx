/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Card({ title, value, unit, icon, loaded }) {
  return (
    <div className="card bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <article>
        <h2 className="text-xl font-semibold">{title}</h2>
        {loaded || value == -1 ? (
          <Box sx={{ display: "flex" }}>
            <p className="text-3xl font-bold mb-4">
              <CircularProgress /> {unit}
            </p>
          </Box>
        ) : (
          <p className="text-3xl font-bold mb-4">
            {value} {unit}
          </p>
        )}
      </article>
      <div className="w-20 flex justify-center">
        <FontAwesomeIcon
          icon={icon}
          className="card__icon text-blue-500 text-6xl"
        />
      </div>
    </div>
  );
}
