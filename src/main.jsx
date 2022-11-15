import "bulma/css/bulma.css";

import { createRoot } from "react-dom/client";
import App from "./App";
import { BulmaPractice } from "./BulmaPractice";

createRoot(document.querySelector("#content")).render(<BulmaPractice />);