import * as React from 'react';
import './style.css';

const Modal = ({ id = 'modal', onClose = () => { } }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id={id} className="modal" onClick={handleOutsideClick} >
            <div className='modal-container'>
                <button className='close' onClick={onClose} />
                <div className='content'>
                    <h1>Atualize as informações</h1>
                    <div className='modal-form'>
                        <label>Nome:</label>
                        <input id="name" type="text" placeholder='Nome:' /><br />
                        <label>Valor:</label>
                        <input id="price" type="number" placeholder='Valor' /><br />
                        <button className='btn-atualizar' type="submit">Atualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;