import { GoBack } from "../components/GoBack"

export function AboutMe() {
    return (
        <div>
            <div className="container">
                
            <section className="section">
                
                    <div className="title">About me</div>
                    </section>
                    <div className="content ">
                <ul>
                    <li>2003年生まれる。</li>
                    <li>2019年広島大学附属福山高等学校入学。</li>
                    <li>2022年広島大学附属福山高等学校卒業。</li>
                    <li>2022年4月東京大学理科一類入学。</li>
                    <li>2022年7月ATF株式会社でインターン。</li>
                    <li>2022年9月Still Green株式会社でインターン。</li>


                </ul>
                </div>
                
            
                <section className="section">

                <div className="columns">
                <div className="column">
                       <img src="../../public/images/IMG_1064.JPG" alt="写真" width="300" height="4000"></img>
                           
                </div>
                <div className="column is-3">
                    <p>名称：</p>
                    <p>所在地：</p>
                    <p>お問い合わせ：</p>
                    <p>twitter：</p>


                </div>
                <div className="column is-5">
                    <p>ロビンソンコスモ</p>
                    <p>東京都内</p>
                    <p>cosmomax10@gmail.com</p>
                    <p>@cosmomax10</p>


                </div>

                </div>
          
                </section>
           
                <div className="container">
        <section className="section">
        
        <a class="navbar-item" href="../">
        Go Back
      </a>

        </section></div>
        
            </div>
        </div>
            
    )
}