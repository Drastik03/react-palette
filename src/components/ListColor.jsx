/* eslint-disable react/prop-types */
// ListColor.jsx
import { CardColor } from "./CardColor";

// eslint-disable-next-line react/prop-types
export function ListColor({ colors }) {
  return (
    <div className="bg-black h-[400px] overflow-y-auto absolute w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
      {colors.map((colores, id) => (
        <CardColor key={id} hexColor={colores.hex} />
      ))}
    </div>
  );
}
