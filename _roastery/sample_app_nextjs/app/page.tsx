"use client";
import { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Green from "./components/Green";
import Purple from "./components/Purple";
import Orange from "./components/Orange";
import Type from './components/Type'

export default function Page() {
  const [name, setName] = useState("");

  return (
    <>
      <Red />
      <Blue />
      <Green />
      <Purple />
      <Orange />
      <Type  />
    </>
  );
}
