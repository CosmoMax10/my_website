import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Metaverse } from "./projects/Metaverse";

export function Projects() {
    return (
        <div>
            <div className="container">
            <p>These are my projects.</p>
            <p><a href="../">Go Back</a></p>

            <section className="section">
                <p>
                    <a href="../projects/metaverse">Metaverse</a>
                </p>
            </section>
            </div>

        </div>
    )
}
