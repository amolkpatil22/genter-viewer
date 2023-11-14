import React from "react";
import { styled } from "styled-components";

const AIBot = () => {
  return (
    <DIV>
      <label class="bb8-toggle">
        <input class="bb8-toggle__checkbox" type="checkbox" />
        <div class="bb8">
          <div class="bb8__head-container">
            <div class="bb8__antenna"></div>
            <div class="bb8__antenna"></div>
            <div class="bb8__head"></div>
          </div>
          <div class="bb8__body"></div>
        </div>
      </label>
    </DIV>
  );
};

export default AIBot;

const DIV = styled.div`
display: flex;
justify-content: center;
align-items: center;
    
    .bb8-toggle {
  --bb8-diameter: 4.375em;
  --radius: 99em;
  --transition: 0.4s;
  --accent: #de7d2f;
  --bb8-bg: #fff;
}

.bb8-toggle,
.bb8-toggle *,
.bb8-toggle *::before,
.bb8-toggle *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.bb8-toggle {
  cursor: pointer;
  margin-top: var(--margin-top-for-head);
  font-size: var(--toggle-size);
}

.bb8-toggle__checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: none;
}


.bb8 {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  top: calc(var(--toggle-offset) - 1.688em + 0.188em);
  left: var(--toggle-offset);
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  z-index: 2;
}

.bb8__head-container {
  position: relative;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  z-index: 2;
  -webkit-transform-origin: 1.25em 3.75em;
  -ms-transform-origin: 1.25em 3.75em;
  transform-origin: 1.25em 3.75em;
}

.bb8__head {
  overflow: hidden;
  margin-bottom: -0.188em;
  width: 2.5em;
  height: 1.688em;
  background: -o-linear-gradient(
      transparent 0.063em,
      dimgray 0.063em 0.313em,
      transparent 0.313em 0.375em,
      var(--accent) 0.375em 0.5em,
      transparent 0.5em 1.313em,
      silver 1.313em 1.438em,
      transparent 1.438em
    ),
    -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
  background: -o-linear-gradient(
      transparent 0.063em,
      dimgray 0.063em 0.313em,
      transparent 0.313em 0.375em,
      var(--accent) 0.375em 0.5em,
      transparent 0.5em 1.313em,
      silver 1.313em 1.438em,
      transparent 1.438em
    ),
    -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
  background: -o-linear-gradient(
      transparent 0.063em,
      dimgray 0.063em 0.313em,
      transparent 0.313em 0.375em,
      var(--accent) 0.375em 0.5em,
      transparent 0.5em 1.313em,
      silver 1.313em 1.438em,
      transparent 1.438em
    ),
    -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
  background: -o-linear-gradient(
      transparent 0.063em,
      dimgray 0.063em 0.313em,
      transparent 0.313em 0.375em,
      var(--accent) 0.375em 0.5em,
      transparent 0.5em 1.313em,
      silver 1.313em 1.438em,
      transparent 1.438em
    ),
    -o-linear-gradient(45deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(135deg, transparent 0.188em, var(--bb8-bg) 0.188em 1.25em, transparent
          1.25em),
    -o-linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
  background: linear-gradient(
      transparent 0.063em,
      dimgray 0.063em 0.313em,
      transparent 0.313em 0.375em,
      var(--accent) 0.375em 0.5em,
      transparent 0.5em 1.313em,
      silver 1.313em 1.438em,
      transparent 1.438em
    ),
    linear-gradient(
      45deg,
      transparent 0.188em,
      var(--bb8-bg) 0.188em 1.25em,
      transparent 1.25em
    ),
    linear-gradient(
      -45deg,
      transparent 0.188em,
      var(--bb8-bg) 0.188em 1.25em,
      transparent 1.25em
    ),
    linear-gradient(var(--bb8-bg) 1.25em, transparent 1.25em);
  border-radius: var(--radius) var(--radius) 0 0;
  position: relative;
  z-index: 1;
  -webkit-filter: drop-shadow(0 0.063em 0.125em gray);
  filter: drop-shadow(0 0.063em 0.125em gray);
}

.bb8__head::before {
  content: "";
  position: absolute;
  width: 0.563em;
  height: 0.563em;
  background: -o-radial-gradient(
      0.25em 0.375em,
      0.125em circle,
      red,
      transparent
    ),
    -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
          100%),
    -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
  background: -o-radial-gradient(
      0.25em 0.375em,
      0.125em circle,
      red,
      transparent
    ),
    -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
          100%),
    -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
  background: -o-radial-gradient(
      0.25em 0.375em,
      0.125em circle,
      red,
      transparent
    ),
    -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
          100%),
    -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
  background: -o-radial-gradient(
      0.25em 0.375em,
      0.125em circle,
      red,
      transparent
    ),
    -o-radial-gradient(0.375em 0.188em, 0.063em circle, var(--bb8-bg) 50%, transparent
          100%),
    -o-linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
  background: radial-gradient(
      0.125em circle at 0.25em 0.375em,
      red,
      transparent
    ),
    radial-gradient(
      0.063em circle at 0.375em 0.188em,
      var(--bb8-bg) 50%,
      transparent 100%
    ),
    linear-gradient(45deg, #000 0.188em, dimgray 0.313em 0.375em, #000 0.5em);
  border-radius: var(--radius);
  top: 0.413em;
  left: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
  -webkit-box-shadow: 0 0 0 0.089em lightgray, 0.563em 0.281em 0 -0.148em,
    0.563em 0.281em 0 -0.1em var(--bb8-bg), 0.563em 0.281em 0 -0.063em;
  box-shadow: 0 0 0 0.089em lightgray, 0.563em 0.281em 0 -0.148em,
    0.563em 0.281em 0 -0.1em var(--bb8-bg), 0.563em 0.281em 0 -0.063em;
  z-index: 1;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}

.bb8__head::after {
  content: "";
  position: absolute;
  bottom: 0.375em;
  left: 0;
  width: 100%;
  height: 0.188em;
  background: -o-linear-gradient(
    left,
    var(--accent) 0.125em,
    transparent 0.125em 0.188em,
    var(--accent) 0.188em 0.313em,
    transparent 0.313em 0.375em,
    var(--accent) 0.375em 0.938em,
    transparent 0.938em 1em,
    var(--accent) 1em 1.125em,
    transparent 1.125em 1.875em,
    var(--accent) 1.875em 2em,
    transparent 2em 2.063em,
    var(--accent) 2.063em 2.25em,
    transparent 2.25em 2.313em,
    var(--accent) 2.313em 2.375em,
    transparent 2.375em 2.438em,
    var(--accent) 2.438em
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.125em, var(--accent)),
    color-stop(0.125em, transparent),
    color-stop(0.188em, var(--accent)),
    color-stop(0.313em, transparent),
    color-stop(0.375em, var(--accent)),
    color-stop(0.938em, transparent),
    color-stop(1em, var(--accent)),
    color-stop(1.125em, transparent),
    color-stop(1.875em, var(--accent)),
    color-stop(2em, transparent),
    color-stop(2.063em, var(--accent)),
    color-stop(2.25em, transparent),
    color-stop(2.313em, var(--accent)),
    color-stop(2.375em, transparent),
    color-stop(2.438em, var(--accent))
  );
  background: linear-gradient(
    to right,
    var(--accent) 0.125em,
    transparent 0.125em 0.188em,
    var(--accent) 0.188em 0.313em,
    transparent 0.313em 0.375em,
    var(--accent) 0.375em 0.938em,
    transparent 0.938em 1em,
    var(--accent) 1em 1.125em,
    transparent 1.125em 1.875em,
    var(--accent) 1.875em 2em,
    transparent 2em 2.063em,
    var(--accent) 2.063em 2.25em,
    transparent 2.25em 2.313em,
    var(--accent) 2.313em 2.375em,
    transparent 2.375em 2.438em,
    var(--accent) 2.438em
  );
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}

.bb8__antenna {
  position: absolute;
  -webkit-transform: translateY(-90%);
  -ms-transform: translateY(-90%);
  transform: translateY(-90%);
  width: 0.059em;
  border-radius: var(--radius) var(--radius) 0 0;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
}

.bb8__antenna:nth-child(1) {
  height: 0.938em;
  right: 0.938em;
  background: -o-linear-gradient(#000 0.188em, silver 0.188em);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.188em, #000),
    color-stop(0.188em, silver)
  );
  background: linear-gradient(#000 0.188em, silver 0.188em);
}

.bb8__antenna:nth-child(2) {
  height: 0.375em;
  left: 50%;
  -webkit-transform: translate(-50%, -90%);
  -ms-transform: translate(-50%, -90%);
  transform: translate(-50%, -90%);
  background: silver;
}

.bb8__body {
  width: 4.375em;
  height: 4.375em;
  background: var(--bb8-bg);
  border-radius: var(--radius);
  position: relative;
  overflow: hidden;
  -webkit-transition: var(--transition);
  -o-transition: var(--transition);
  transition: var(--transition);
  z-index: 1;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background: -webkit-gradient(
      linear,
      right top,
      left top,
      color-stop(4%, var(--bb8-bg)),
      color-stop(4%, var(--accent)),
      color-stop(10%, transparent),
      color-stop(90%, var(--accent)),
      color-stop(96%, var(--bb8-bg))
    ),
    -webkit-gradient(linear, left top, left bottom, color-stop(4%, var(--bb8-bg)), color-stop(4%, var(--accent)), color-stop(10%, transparent), color-stop(90%, var(--accent)), color-stop(96%, var(--bb8-bg))),
    -webkit-gradient(linear, left top, right top, color-stop(2.156em, transparent), color-stop(2.156em, silver), color-stop(2.188em, transparent)),
    -webkit-gradient(linear, left top, left bottom, color-stop(2.156em, transparent), color-stop(2.156em, silver), color-stop(2.188em, transparent));
  background: -o-linear-gradient(
      right,
      var(--bb8-bg) 4%,
      var(--accent) 4% 10%,
      transparent 10% 90%,
      var(--accent) 90% 96%,
      var(--bb8-bg) 96%
    ),
    -o-linear-gradient(var(--bb8-bg) 4%, var(--accent) 4% 10%, transparent 10%
          90%, var(--accent) 90% 96%, var(--bb8-bg) 96%),
    -o-linear-gradient(left, transparent 2.156em, silver 2.156em 2.219em, transparent
          2.188em),
    -o-linear-gradient(transparent 2.156em, silver 2.156em 2.219em, transparent
          2.188em);
  background: linear-gradient(
      -90deg,
      var(--bb8-bg) 4%,
      var(--accent) 4% 10%,
      transparent 10% 90%,
      var(--accent) 90% 96%,
      var(--bb8-bg) 96%
    ),
    linear-gradient(
      var(--bb8-bg) 4%,
      var(--accent) 4% 10%,
      transparent 10% 90%,
      var(--accent) 90% 96%,
      var(--bb8-bg) 96%
    ),
    linear-gradient(
      to right,
      transparent 2.156em,
      silver 2.156em 2.219em,
      transparent 2.188em
    ),
    linear-gradient(
      transparent 2.156em,
      silver 2.156em 2.219em,
      transparent 2.188em
    );
  background-color: var(--bb8-bg);
}

.bb8__body::after {
  content: "";
  bottom: 1.5em;
  left: 0.563em;
  position: absolute;
  width: 0.188em;
  height: 0.188em;
  background: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
  border-radius: 50%;
  -webkit-box-shadow: 0.875em 0.938em, 0 -1.25em, 0.875em -2.125em,
    2.125em -2.125em, 3.063em -1.25em, 3.063em 0, 2.125em 0.938em;
  box-shadow: 0.875em 0.938em, 0 -1.25em, 0.875em -2.125em, 2.125em -2.125em,
    3.063em -1.25em, 3.063em 0, 2.125em 0.938em;
}

.bb8__body::before {
  content: "";
  width: 2.625em;
  height: 2.625em;
  position: absolute;
  border-radius: 50%;
  z-index: 0.1;
  overflow: hidden;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 0.313em solid var(--accent);
  background: -o-radial-gradient(
      center,
      1em circle,
      rgb(236, 236, 236) 50%,
      transparent 51%
    ),
    -o-radial-gradient(center, 1.25em circle, var(--bb8-bg) 50%, transparent 51%),
    -o-linear-gradient(right, transparent 42%, var(--accent) 42% 58%, transparent
          58%),
    -o-linear-gradient(var(--bb8-bg) 42%, var(--accent) 42% 58%, var(--bb8-bg)
          58%);
  background: -o-radial-gradient(
      center,
      1em circle,
      rgb(236, 236, 236) 50%,
      transparent 51%
    ),
    -o-radial-gradient(center, 1.25em circle, var(--bb8-bg) 50%, transparent 51%),
    -o-linear-gradient(right, transparent 42%, var(--accent) 42% 58%, transparent
          58%),
    -o-linear-gradient(var(--bb8-bg) 42%, var(--accent) 42% 58%, var(--bb8-bg)
          58%);
  background: radial-gradient(
      1em circle at center,
      rgb(236, 236, 236) 50%,
      transparent 51%
    ),
    radial-gradient(1.25em circle at center, var(--bb8-bg) 50%, transparent 51%),
    -webkit-gradient(linear, right top, left top, color-stop(42%, transparent), color-stop(42%, var(--accent)), color-stop(58%, transparent)),
    -webkit-gradient(linear, left top, left bottom, color-stop(42%, var(--bb8-bg)), color-stop(42%, var(--accent)), color-stop(58%, var(--bb8-bg)));
  background: radial-gradient(
      1em circle at center,
      rgb(236, 236, 236) 50%,
      transparent 51%
    ),
    radial-gradient(1.25em circle at center, var(--bb8-bg) 50%, transparent 51%),
    linear-gradient(
      -90deg,
      transparent 42%,
      var(--accent) 42% 58%,
      transparent 58%
    ),
    linear-gradient(var(--bb8-bg) 42%, var(--accent) 42% 58%, var(--bb8-bg) 58%);
}



`