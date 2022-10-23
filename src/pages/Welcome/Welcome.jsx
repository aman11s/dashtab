import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Welcome.css";

export const Welcome = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="overlay-text">
        <h1 className="fs-lg">Hello, what's your name?</h1>
        <form>
          <input
            onChange={(e) => setName(e.target.value)}
            className="input-box fs-md"
            type="text"
          />
          {name.length > 0 && (
            <button className="submit-btn">
              Continue <MdOutlineKeyboardArrowRight />
            </button>
          )}
        </form>
      </div>
    </>
  );
};
