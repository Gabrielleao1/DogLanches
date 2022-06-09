import * as React from 'react';
import axios from 'axios';
import './style.css';

const ModalExcluir = ({ idBurguers, id = 'modalExcluir', onClose = () => { } }) => {

    const delet = () => {
        console.log(idBurguers)
        let config = {
            method: 'delete',
            url: `https://localhost:7198/api/burguers/${idBurguers}`,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id={id} className="modalExcluir" onClick={handleOutsideClick} >
            <div className='modalExcluir-container'>
                <button className='close' onClick={onClose} />
                <div className='content-excluir'>
                    <h1>Deseja excluir permanentemente este item?</h1>
                    <div className='modalExcluir-form'>
                        <button className="btn-excluir" type='submit' onClick={delet}>Excluir</button>
                        <button className='btn-cancelar' type='submit' onClick={onClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalExcluir;