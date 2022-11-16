import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Metaverse } from "./projects/Metaverse";

export function Projects() {
    return (
        <div>
            <div className="container">

            <section className="section">
                <section className="section">
                <p><div className="title">Projects</div></p>
                </section>
                <div className="subtitle">画像をクリックしてください</div>

            </section>

            <body>
                <section className="section">
                    <a href="../metaverse">
                        <div className="title">Metaverse</div>
                        <img src="../../public/images/metaverse.jpg" width="800" height="400"></img></a>
                </section>

                <section className="section">
                    
                </section>

                <section className="section">
                    <a href="../cryptotrade">
                        <div className="title">Crypto Trading</div>
                        <img src="../../public/images/cryptotrading.jpg" width="800" height="400"></img></a>
                </section>

                <section className="section">
                    
                </section>
            </body>



            <p><a href="../">Go Back</a></p>

            
            </div>

        </div>
    )
}
