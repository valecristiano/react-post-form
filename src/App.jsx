import axios from "axios";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [formState, setFormState] = useState({
    postAuthor: "",
    postTitle: "",
    postText: "",
    isPublic: false,
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Header></Header>
      <main>
        <section className="container">
          <form className="row g-3 mt-3">
            {/* //autore */}
            <div className="col-md-6">
              <label htmlFor="author" className="form-label">
                Autore
              </label>
              <input name="postAuthor" value={formState.postAuthor} onChange={handleFormChange} type="text" className="form-control" id="author" />
            </div>
            {/* titolo */}
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Titolo
              </label>
              <input name="postTitle" value={formState.postTitle} onChange={handleFormChange} type="text" className="form-control" id="title" />
            </div>
            {/* testo */}
            <div className="col-12">
              <label htmlFor="text-area" className="form-label">
                Testo
              </label>
              <textarea name="postText" value={formState.postText} onChange={handleFormChange} className="form-control" aria-label="With textarea" id="text-area"></textarea>
            </div>
            {/* checkbox */}
            <div className="col-12">
              <div className="form-check">
                <input name="isPublic" checked={formState.isPublic} onChange={handleFormChange} className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Pubblico
                </label>
              </div>
            </div>
            {/* bottone */}
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
