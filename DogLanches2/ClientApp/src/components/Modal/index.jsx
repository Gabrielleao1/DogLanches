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
                        <form action="" method="post">
                            <label>Nome:</label>
                            <input type="text" placeholder='Nome:' /><br />
                            <label>Valor:</label>
                            <input type="number" placeholder='Valor'/><br />
                            <button type="submit">Atualizar</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;