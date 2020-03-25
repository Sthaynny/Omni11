import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'//feathericons
import api from '../../services/api';

import './style.css'

import heroesImg from '../../assets/heroes.png'
import logoimg from '../../assets/logo.svg'

export default function Logon() {

    const[id, setId]= useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const res = await api.post('session',{
                id
            })
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName',res.data.name);
            history.push('/profile')

        }catch(err)
        {
            alert('Falha no login, tente novamente!')
        }
    }



    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="BE THE HEROES"/>
                <form onSubmit={handleLogin}>
                    <h1>
                        Faça seu logon
                    </h1>
                    <input 
                        type="text" 
                        placeholder="Sua id" 
                        id="" 
                        value= {id}
                        onChange={e=> setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}