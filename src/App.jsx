import "./App.css";
import { Header } from "./components/Header";
import { ListColor } from "./components/ListColor";
import { Search } from "./components/Search";
import { useEffect, useState } from "react";
import Values from "values.js";

function App() {
  const [searchedColors, setSearchedColors] = useState([]);
  useEffect(()=>{
    const colorDefault = new Values("red").all()
    setSearchedColors(colorDefault)
  },[])
  const handleSearch = (newColors) => {
    setSearchedColors(newColors);
  };

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      <ListColor colors={searchedColors} />
    </>
  );
}

export default App;
