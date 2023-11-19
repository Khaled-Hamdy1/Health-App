/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ title, value, unit, icon }) {
  return (
    <div className="card bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <article>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-3xl font-bold mb-4">
          {value} {unit}
        </p>
      </article>
      <FontAwesomeIcon
        icon={icon}
        className="card__icon text-blue-500 text-6xl mr-2"
      />
    </div>
  );
}
