import { useState } from "react"
import prox from "../img/arrowFoward.png"
import ult from "../img/arrowBack.png"
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"

function HomeSections() {
    const [slide, setSlide] = useState(img1)

    function proxSlide() {
        if (slide === img1) {
            setSlide(img2)
        }

        if (slide === img2) {
            setSlide(img3)
        }

        if (slide === img3) {
            setSlide(img1)
        }
    }

    function ultSlide() {
        if (slide === img1) {
            setSlide(img3)
        }

        if (slide === img2) {
            setSlide(img1)
        }

        if (slide === img3) {
            setSlide(img2)
        }
    }

    return(
        <main>
            <section className="mainSection">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus sed, alias totam blanditiis quibusdam esse enim quas est! Laborum delectus illo tenetur provident. Minima sequi eum ipsam consectetur ullam?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad enim similique repellendus autem molestiae porro quaerat dicta, sint et. Minima asperiores placeat aliquam vero. Incidunt suscipit quas sequi aliquid ad.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel blanditiis fugiat accusantium, non similique recusandae pariatur obcaecati quasi deleniti iste. Nihil perferendis facilis fugit quasi. Itaque quo omnis quaerat placeat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at suscipit sit harum accusamus dicta iusto vero eaque perferendis quidem corrupti eligendi, porro temporibus ducimus quo eveniet officiis obcaecati a!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore! Magni, quibusdam repellendus dolorum vel totam incidunt distinctio id fuga tenetur impedit voluptates eum explicabo voluptatum consectetur exercitationem inventore cupiditate!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus sed, alias totam blanditiis quibusdam esse enim quas est! Laborum delectus illo tenetur provident. Minima sequi eum ipsam consectetur ullam?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad enim similique repellendus autem molestiae porro quaerat dicta, sint et. Minima asperiores placeat aliquam vero. Incidunt suscipit quas sequi aliquid ad.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel blanditiis fugiat accusantium, non similique recusandae pariatur obcaecati quasi deleniti iste. Nihil perferendis facilis fugit quasi. Itaque quo omnis quaerat placeat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at suscipit sit harum accusamus dicta iusto vero eaque perferendis quidem corrupti eligendi, porro temporibus ducimus quo eveniet officiis obcaecati a!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore! Magni, quibusdam repellendus dolorum vel totam incidunt distinctio id fuga tenetur impedit voluptates eum explicabo voluptatum consectetur exercitationem inventore cupiditate!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus sed, alias totam blanditiis quibusdam esse enim quas est! Laborum delectus illo tenetur provident. Minima sequi eum ipsam consectetur ullam?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad enim similique repellendus autem molestiae porro quaerat dicta, sint et. Minima asperiores placeat aliquam vero. Incidunt suscipit quas sequi aliquid ad.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel blanditiis fugiat accusantium, non similique recusandae pariatur obcaecati quasi deleniti iste. Nihil perferendis facilis fugit quasi. Itaque quo omnis quaerat placeat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at suscipit sit harum accusamus dicta iusto vero eaque perferendis quidem corrupti eligendi, porro temporibus ducimus quo eveniet officiis obcaecati a!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore! Magni, quibusdam repellendus dolorum vel totam incidunt distinctio id fuga tenetur impedit voluptates eum explicabo voluptatum consectetur exercitationem inventore cupiditate!</p>

                <div className="divCarrossel">
                    <img src={slide} alt="Carrossel de imagens" className="carrossel"/>
                </div>
                <div className="divButtons">
                    <button className="prev" onClick={() => ultSlide()}><img src={ult} alt="Último slide"/></button>
                    <button className="next" onClick={() => proxSlide()}><img src={prox} alt="Proximo slide"/></button>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus sed, alias totam blanditiis quibusdam esse enim quas est! Laborum delectus illo tenetur provident. Minima sequi eum ipsam consectetur ullam?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad enim similique repellendus autem molestiae porro quaerat dicta, sint et. Minima asperiores placeat aliquam vero. Incidunt suscipit quas sequi aliquid ad.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel blanditiis fugiat accusantium, non similique recusandae pariatur obcaecati quasi deleniti iste. Nihil perferendis facilis fugit quasi. Itaque quo omnis quaerat placeat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at suscipit sit harum accusamus dicta iusto vero eaque perferendis quidem corrupti eligendi, porro temporibus ducimus quo eveniet officiis obcaecati a!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore! Magni, quibusdam repellendus dolorum vel totam incidunt distinctio id fuga tenetur impedit voluptates eum explicabo voluptatum consectetur exercitationem inventore cupiditate!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus sed, alias totam blanditiis quibusdam esse enim quas est! Laborum delectus illo tenetur provident. Minima sequi eum ipsam consectetur ullam?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad enim similique repellendus autem molestiae porro quaerat dicta, sint et. Minima asperiores placeat aliquam vero. Incidunt suscipit quas sequi aliquid ad.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel blanditiis fugiat accusantium, non similique recusandae pariatur obcaecati quasi deleniti iste. Nihil perferendis facilis fugit quasi. Itaque quo omnis quaerat placeat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at suscipit sit harum accusamus dicta iusto vero eaque perferendis quidem corrupti eligendi, porro temporibus ducimus quo eveniet officiis obcaecati a!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore! Magni, quibusdam repellendus dolorum vel totam incidunt distinctio id fuga tenetur impedit voluptates eum explicabo voluptatum consectetur exercitationem inventore cupiditate!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus sed, alias totam blanditiis quibusdam esse enim quas est! Laborum delectus illo tenetur provident. Minima sequi eum ipsam consectetur ullam?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad enim similique repellendus autem molestiae porro quaerat dicta, sint et. Minima asperiores placeat aliquam vero. Incidunt suscipit quas sequi aliquid ad.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel blanditiis fugiat accusantium, non similique recusandae pariatur obcaecati quasi deleniti iste. Nihil perferendis facilis fugit quasi. Itaque quo omnis quaerat placeat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at suscipit sit harum accusamus dicta iusto vero eaque perferendis quidem corrupti eligendi, porro temporibus ducimus quo eveniet officiis obcaecati a!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, dolore! Magni, quibusdam repellendus dolorum vel totam incidunt distinctio id fuga tenetur impedit voluptates eum explicabo voluptatum consectetur exercitationem inventore cupiditate!</p>
            </section>
        </main>
    )
}

export default HomeSections