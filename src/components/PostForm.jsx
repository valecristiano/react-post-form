import axios from "axios";
import { useState } from "react";

export default function PostForm() {
  // stato iniziale del form
  const initialFormState = {
    postAuthor: "",
    postTitle: "",
    postText: "",
    isPublic: false,
  };

  const [formState, setFormState] = useState(initialFormState);

  // stato button alert invio form
  const [buttonState, setButtonState] = useState(false);

  // funzione modifica input
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // funzione submit del form
  const submitFormData = (e) => {
    e.preventDefault();
    // post axios
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", { formState }).then(() => {
      console.table(formState);
      //visibilità alert
      setButtonState(true);
      // reset form
      setFormState(initialFormState);
    });
  };

  return (
    <main>
      <section className="container">
        <form onSubmit={submitFormData} className="row g-3 mt-3">
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
      {/* alert */}
      {buttonState && (
        <section className="container mt-3">
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            "Il tuo post è stato inviato"
            <button onClick={() => setButtonState(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </section>
      )}
    </main>
  );
}
