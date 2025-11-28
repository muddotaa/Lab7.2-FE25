import React, { Component } from "react";
import Image from "./Image";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      clicked4: false,
      clicked5: false,
    };
  }

  toggle(id) {
    this.setState(prev => ({ [id]: !prev[id] }));
  }

  render() {
    return (
      <main>
        <section>
          <h3>Про мене</h3>
          <p><strong>Місце й дата народження:</strong> 12 травня 2006 року, м. Сімферополь.</p>
          <p><strong>Освіта:</strong> Школа №91, м. Київ; НТУУ «КПІ», м. Київ.</p>
        </section>

        <section>
          <h3>Хобі</h3>
          <ul>
            <li>Спорт</li>
            <li>Комп’ютерні ігри</li>
            <li>Фотографія</li>
          </ul>
        </section>

        <section>
          <h3>Улюблені фільми</h3>
          <ol>
            <li
              onClick={() => this.toggle("clicked4")}
              style={{
                background: this.state.clicked4 ? "lightblue" : "",
                color: this.state.clicked4 ? "darkblue" : "",
                cursor: "pointer"
              }}
            >
              «Мої думки тихі» (2020)
            </li>

            <li
              onClick={() => this.toggle("clicked5")}
              style={{
                background: this.state.clicked5 ? "lightgreen" : "",
                color: this.state.clicked5 ? "darkgreen" : "",
                cursor: "pointer"
              }}
            >
              «Я працюю на цвинтарі» (2022)
            </li>

            <li>«Припутні» (2017)</li>
          </ol>
        </section>

        <section>
          <h3>Улюблене місто — Прага</h3>
          <p>Прага — столиця Чеської Республіки з красивою архітектурою.</p>

          <Image />
        </section>
      </main>
    );
  }
}

export default Content;
