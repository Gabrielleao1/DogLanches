import * as React from 'react';
import axios from 'axios';
//import { useState } from 'react';
import './style.css';


const CadastrarIngredientes = ({ id = 'modalIngredientes', onClose = () => { } }) => {
    // const [ingrediente, setIngrediente] = useState([]);

    const sent = () => {
        let name = document.getElementById('name').value;
        let price = document.getElementById('price').value;
        let data = JSON.stringify({
            "name": name,
            "price": price
        });
    
        var config = {
            method: 'post',
            url: 'https://localhost:7198/api/ingredientes',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    
        axios(config)
            .then(response => {
                console.log(JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id={id} className="modalIngredientes" onClick={handleOutsideClick} >
            <div className='modalIngredientes-container'>
                <button className='close' onClick={onClose} />
                <div className='content'>
                    <h1>Cadastre um ingrediente</h1>
                    <div className='modalIngredientes-form'>
                        <label>Nome:</label>
                        <input id="name" type="text" placeholder='Nome' /><br />
                        <label>Valor:</label>
                        <input id="price" type="number" placeholder='Valor' /><br />
                        <button type="submit" onClick={sent}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastrarIngredientes;
