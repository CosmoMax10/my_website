import { GoBack } from "../../components/GoBack"

export function Metaverse() {
    return (
        <div>
        <section className="section">
        <div className="container">
        <div className="title">
        Metaverse
        </div>

        </div>

        <section className="section">
        <img src="../../../public/images/metaverse_dev.jpg
        "></img></section>
        
        </section>
            <div className="container">
                
            <body>
            
            私は、東京大学のutcodeというプログラミングサークルでメタバースを開発しています。<br></br>
            まだVRなどの機能はつけていませんが、オンラインでほかの人と出会ったりできる仮想空間はできつつあります。
            <br></br><br></br>
            開発環境はUnityで、PhotonのPUN2というモジュールを使ってオンラインゲームを再現しています。<br></br>
            完成したらぜひとも遊んでいただきたいです！
            
            
            </body>

                
            </div>


        <GoBack/>
        </div>
    )
}