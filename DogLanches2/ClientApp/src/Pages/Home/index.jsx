import * as React from 'react';
import './style.css'
import MainImg from '../../assets/images/hamburguer.png';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
       <div className="card-container">
            <div className="card">
                <div className='card-left'>
                    <div className="card-left-content">
                        <h1>DogLanches</h1>
                        <h3>Faça o gerenciamento do seu cardápio</h3>
                        <p>Com o sistema DogLanches você faz o gerenciamento do seu cardápio de uma forma mais prática</p>
                    </div>
                    <Link to="/cardapio"><button className="btn-hamburguer"><h6>Hamburguers</h6></button></Link>
                </div>
                <div className='card-right'>
                    <img src={ MainImg } alt="Imagem principal"/>
                </div>
            </div>
       </div>
    </>
);

export default Home;
