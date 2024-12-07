'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [input, setInput] = useState<number>();


  const handleClick = () => {
    const input1Element = document.getElementById("input1") as HTMLInputElement;
    if (input1Element) {
      const value = parseFloat(input1Element.value);
      if (!isNaN(value)) {
        setInput(value); 
      } else {
        setInput(0);
      }
    }
  };



  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <input id="input1" type="text" placeholder="Enter Number" className="w-64"/>
      <input type="text" value={input ? input: 0} readOnly className="w-64"/>
      <button onClick={handleClick} className="bg-black p-3 text-white w-64">Set Number</button>
    </div>
  );
}
