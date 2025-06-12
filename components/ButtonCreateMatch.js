"use client";
import axios from "axios";
import { useState } from "react";

export default function ButtonCreateMatch() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function createMatch(event) {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/create", { name, date, time });
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={createMatch}>
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
      {error && <p className="error">{error}</p>}
      <button type="submit" className="btn btn-primary">
        {isLoading && <span className="loading loading-spinner"></span>}
        Create Match
      </button>
    </form>
  );
}
