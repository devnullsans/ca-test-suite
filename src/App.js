import { useState } from "react";
import data from "./data";

export default function App() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [confirmed, setConfirmed] = useState("");
  return (
    <>
      <header className="top">
        <p className="opt">
          <strong className="me-4">{index + 1}.</strong>
          <span dangerouslySetInnerHTML={{ __html: data[index]["question"] }} />
        </p>
      </header>
      <section className="mid">
        <label className={`opt${confirmed === "a" ? ` ol-${confirmed === data[index]["answer"] ? "g" : "r"}` : ""}`}>
          <input
            name="optn"
            type="radio"
            className="me-4"
            disabled={!!confirmed}
            checked={selected === "a"}
            onChange={() => setSelected("a")}
          />
          <span>{data[index]["a"]}</span>
        </label>
        <label className={`opt${confirmed === "b" ? ` ol-${confirmed === data[index]["answer"] ? "g" : "r"}` : ""}`}>
          <input
            name="optn"
            type="radio"
            className="me-4"
            disabled={!!confirmed}
            checked={selected === "b"}
            onChange={() => setSelected("b")}
          />
          <span>{data[index]["b"]}</span>
        </label>
        <label className={`opt${confirmed === "c" ? ` ol-${confirmed === data[index]["answer"] ? "g" : "r"}` : ""}`}>
          <input
            name="optn"
            type="radio"
            className="me-4"
            disabled={!!confirmed}
            checked={selected === "c"}
            onChange={() => setSelected("c")}
          />
          <span>{data[index]["c"]}</span>
        </label>
        <label className={`opt${confirmed === "d" ? ` ol-${confirmed === data[index]["answer"] ? "g" : "r"}` : ""}`}>
          <input
            name="optn"
            type="radio"
            className="me-4"
            disabled={!!confirmed}
            checked={selected === "d"}
            onChange={() => setSelected("d")}
          />
          <span>{data[index]["d"]}</span>
        </label>
      </section>
      <footer className="low">
        {!!confirmed && <article className="mb-4">{data[index][data[index]["answer"]]}</article>}
        <div className="btn">
          <button
            onClick={() => {
              setIndex(index - 1);
              setSelected("");
              setConfirmed("");
            }}
            disabled={index <= 0}>
            Previous
          </button>
          <button
            onClick={() => setConfirmed(selected)}
            disabled={!selected || !!confirmed}>
            Submit
          </button>
          <button
            onClick={() => {
              setIndex(index + 1);
              setSelected("");
              setConfirmed("");
            }}
            disabled={index + 1 >= data.length}>
            Next
          </button>
        </div>
      </footer>
    </>
  );
}
