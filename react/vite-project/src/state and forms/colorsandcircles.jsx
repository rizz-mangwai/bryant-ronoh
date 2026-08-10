import { useState } from "react";

function ColorsCircles() {
  console.log("ColorsCircles", new Date());

  const [colors, setColors] = useState([]);

  // this function removes a color
  const removeColor = (indexToRemove) => {
    setColors(colors.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = (newColor) => {
    const clonedColors = structuredClone(colors);
    clonedColors.push(newColor);
    setColors(clonedColors);
  };

  return (
    <div>
      <ColorForm onSubmit={onSubmit} />
      <Colorlist colors={colors} removeColor={removeColor} />
    </div>
  );
}

function ColorForm(props) {
  console.log("colorForm", new Date());

  const { onSubmit } = props;
  const [color, setColor] = useState("");

  const handleSubmit = () => {
    onSubmit(color);
    setColor("");
  };

  return (
    <div>
      <label>Enter Color</label>
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleSubmit}>save</button>
    </div>
  );
}

function Colorlist(props) {
  console.log("colorlist", new Date());

  // receive removeColor from parent
  const { colors, removeColor } = props;

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{color}</span>
          <button onClick={() => removeColor(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;