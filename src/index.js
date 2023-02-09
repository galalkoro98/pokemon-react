import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/font.css";
import "./styles/general.css";

import { App } from "./components/App";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<App />);
