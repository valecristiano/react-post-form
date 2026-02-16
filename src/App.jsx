import axios from "axios";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="container">
          <form className="row g-3 mt-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Autore
              </label>
              <input type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Titolo
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Testo
              </label>

              <textarea className="form-control" aria-label="With textarea" id="inputAddress"></textarea>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                <label className="form-check-label" for="radioDefault1">
                  Default radio
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked />
                <label className="form-check-label" for="radioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-outline-warning px-3">
                Invia
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
