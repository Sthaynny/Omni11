import React,{useState} from 'react';
import { Link, useHistory} from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'//feathericons
import api from '../../services/api';

import './style.css'

import logoimg from '../../assets/logo.svg'

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const[title, setTitle]=useState('')
    const[description, setDescription]=useState('')
    const[value, setValue]=useState('')

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }
        try{
            await api.post('incidents', data,{
                headers:{
                    Authorization:ongId
                }
            });
            history.push('/profile')
            
        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente!')
        }
            
    }

    return (
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Be The Heroes"/>
                    <h1>
                        Cadastrar novo caso
                    </h1>
                    <p>Descreva o caso detalhadamente para encontar um herói para resolver isso.</p>

                    <Link className= "back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                            Voltar para Home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                        
                    />
                    <textarea type="text" 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />
                    <input type="text" 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />
                    <button className="button">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}