import { Link } from "react-router-dom"

function HomeSections() {
    // TODO Arrumar o carrossel

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

                <div class="slideshow-container">

                    <div class="mySlides fade">
                        <div class="numbertext">1 / 3</div>
                            <img src="" style="width" alt="Primeira imagem"/>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">2 / 3</div>
                            <img src="" style={} alt="Segunda imagem"/>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">3 / 3</div>
                            <img src="" style={} alt="Terceira imagem"/>
                    </div>

                    <Link class="prev" onclick="plusSlides(-1)">&#10094;</Link>
                    <Link class="next" onclick="plusSlides(1)">&#10095;</Link>
                </div>
            </section>
        </main>
    )
}

export default HomeSections