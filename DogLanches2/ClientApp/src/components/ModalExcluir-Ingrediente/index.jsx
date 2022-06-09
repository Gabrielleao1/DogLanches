import * as React from 'react';
import './style.css';

const ModalExcluirIngrediente = ({ idBurguers, id = 'modalExcluir', onClose = () => { } }) => {

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
                        <button className="btn-excluir" type='submit'>Excluir</button>
                        <button className='btn-cancelar' type='submit' onClick={onClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalExcluirIngrediente;