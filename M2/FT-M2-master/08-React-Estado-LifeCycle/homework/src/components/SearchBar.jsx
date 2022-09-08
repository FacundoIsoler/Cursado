import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.taget.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(input)
    }}>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Ciudad..."
        value={input}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
