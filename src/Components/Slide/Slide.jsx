export default function Slide({ text, image }) {
    return (
      <section class="slide">
        <div class="slide__outer">
          <div class="slide__inner">
            <div class="slide__content">
              <div class="slide__container">
                <h2 class="slide__heading">{text}</h2>
                <figure class="slide__img-cont">
                  <img class="slide__img" src={image} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  