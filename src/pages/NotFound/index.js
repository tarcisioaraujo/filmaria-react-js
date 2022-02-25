
import './notFound.css';
import { Link } from 'react-router-dom';

export default function NotFount(){
  return(
    <div className="not-found">
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Veja todos filmes!</Link>
    </div>
  )
}