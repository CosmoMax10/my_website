import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Metaverse } from "./projects/Metaverse";
import { GoBack } from "../components/GoBack";

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
                        <img src="images/metaverse.jpg" width="800" height="400"></img></a>
                </section>

                <section className="section">
                    
                </section>

                <section className="section">
                    <a href="../cryptotrade">
                        <div className="title">Crypto Trading</div>
                        <img src="images/cryptotrading.jpg" width="800" height="400"></img></a>
                </section>

                <section className="section">
                    <a href="../intern">
                        <div className="title">Intern</div>
                        <img src="images/intern_10.jpg" width="800" height="400"></img></a>
                </section>

               
            </body>



            

            
            </div>
            
            <div className="container">
            <section className="section">
            
            <a class="navbar-item" href="../">
            Go Back
          </a>
    
            </section></div>

        </div>
    )
}
