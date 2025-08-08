import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  const colors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Yellow", value: "yellow" },
    { name: "Orange", value: "orange" },
    { name: "Purple", value: "purple" },
    { name: "Pink", value: "pink" },
    { name: "Brown", value: "brown" },
    { name: "Gray", value: "gray" },
    { name: "Teal", value: "teal" },
    { name: "Lime", value: "lime" },
    { name: "Cyan", value: "cyan" },
    { name: "Magenta", value: "magenta" },
    { name: "Olive", value: "olive" },
    { name: "Maroon", value: "maroon" },
    { name: "Navy", value: "navy" },
    { name: "Gold", value: "gold" },
    { name: "Silver", value: "silver" },
    { name: "Coral", value: "coral" },
    { name: "Tomato", value: "tomato" },
    { name: "Salmon", value: "salmon" },
    { name: "Chocolate", value: "chocolate" },
    { name: "Crimson", value: "crimson" },
    { name: "Khaki", value: "khaki" },
    { name: "Plum", value: "plum" },
    { name: "Orchid", value: "orchid" },
    { name: "Turquoise", value: "turquoise" },
    { name: "SkyBlue", value: "skyblue" },
    { name: "SteelBlue", value: "steelblue" },
    { name: "SlateGray", value: "slategray" },
    { name: "DeepPink", value: "deeppink" },
    { name: "HotPink", value: "hotpink" },
    { name: "SpringGreen", value: "springgreen" },
    { name: "MediumSeaGreen", value: "mediumseagreen" },
    { name: "DarkOliveGreen", value: "darkolivegreen" },
    { name: "Indigo", value: "indigo" },
    { name: "MidnightBlue", value: "midnightblue" },
    { name: "MintCream", value: "mintcream" },
    { name: "Ivory", value: "ivory" },
    { name: "Beige", value: "beige" },
    { name: "Lavender", value: "lavender" },
    { name: "Moccasin", value: "moccasin" },
    { name: "Peru", value: "peru" },
    { name: "RosyBrown", value: "rosybrown" },
    { name: "Sienna", value: "sienna" },
    { name: "Thistle", value: "thistle" },
    { name: "Wheat", value: "wheat" },
    { name: "Azure", value: "azure" }
  ]

  const getTextColor = (bgColor) => {
    // Basic brightness check (for readability)
    const darkColors = ['black', 'navy', 'maroon', 'purple', 'brown', 'indigo', 'midnightblue', 'blue', 'crimson', 'darkolivegreen', 'teal', 'sienna', 'slategray', 'chocolate', 'deeppink', 'steelblue', 'hotpink']
    return darkColors.includes(bgColor.toLowerCase()) ? 'white' : 'black'
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        gap: "10px",
      }}
    >
      {colors.map((col, index) => (
        <button
          key={index}
          onClick={() => setColor(col.value)}
          style={{
            backgroundColor: col.value,
            color: getTextColor(col.value),
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            minWidth: "90px",
          }}
        >
          {col.name}
        </button>
      ))}
    </div>
  )
}

export default App
