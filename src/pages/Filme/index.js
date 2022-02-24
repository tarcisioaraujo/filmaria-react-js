
import { useEffect, useState } from 'react';
import './filme-info.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Filme(){
  const { id } = useParams();
  const history = useHistory();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadFilme(){
      const response = await api.get(`r-api/?api=filmes/${id}`);      

      if (response.data.length === 0) {
        //Não obteve nenhum resultado da API
        history.replace('/');
        return;
      }

      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

  }, [id]);


  if(loading){
    return(
    <div className="filme-info">
      <h1>Carregando filme...</h1>
    </div>
    )
  }
  return(
    <div className="filme-info">
      <h1>PAGINA DETALHES - {id} </h1>
    </div>
  )
}