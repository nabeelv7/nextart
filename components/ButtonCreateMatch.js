"use client";
import { useState } from "react";

export default function ButtonCreateMatch() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function createMatch() {
    setIsLoading(true);
    try {
      const res = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          date,
          time,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
        className="input"
        type="text"
        required
      />
      <input
        onChange={(e) => setDate(e.target.value)}
        className="input"
        type="date"
        required
      />
      <input
        onChange={(e) => setTime(e.target.value)}
        className="input"
        type="time"
        required
      />

      <button onClick={createMatch} className="btn btn-primary">
        {isLoading && <span className="loading loading-spinner"></span>}
        Create Match
      </button>
    </>
  );
}
