// eslint-disable-next-line react/prop-types
export function CardColor({ hexColor }) {
  const copy = () => {
    let textCopy = "#" + hexColor;
    navigator.clipboard.writeText(textCopy);
    console.log("copy");
  };
  return (
    <div className="p-2">
      <div
        className="h-16 w-full rounded-md mb-2"
        style={{ backgroundColor: `#${hexColor}` }}
      ></div>
      <div className="flex justify-between items-center">
        <p className="text-white"># {hexColor}</p>
        <button
          className="bg-blue-500 px-2 py-1 rounded-md text-white"
          onClick={copy}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
