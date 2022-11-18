import { GoBack } from "../../components/GoBack"

export function CryptoTrade() {
    return (
        <div>
            <div className="container">
                <section className="section">
                <div className="title">
                Crypto Trading
                </div></section>
                <section className="section">
                <img src="images/binance.png"></img>
                </section>
                <section className="section">
                    私は仮想通貨の自動売買botを自作しました。<br></br>
                    機械学習を採用していて、仮想通貨の値段が次に上がるか下がるかを予測して売買します。<br></br>
                    収益化するまでには至りませんでしたが、重要な概念を多く学ぶことができました。<br></br>
                    <a href="https://github.com/CosmoMax10/robin_mlbot_practice">こちら</a>が勉強に使ったリポジトリです。<br></br>

                </section>

                <section className="section">
                <img src="../../../public/images/crypto.jpg"></img>
                </section>
            </div>

            <GoBack/>
        </div>
    )
}

