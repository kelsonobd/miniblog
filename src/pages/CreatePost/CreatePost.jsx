import styles from "./CreatePost.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Compartilhe suas ideias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Escreva o título do seu post.."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Url da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira sua imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteudo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteudo do seu post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira suas tags separadas por virgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className="btn">Enviar</button>
       {/*  {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>} */}
      </form> 
    </div>
  );
};

export default CreatePost;
