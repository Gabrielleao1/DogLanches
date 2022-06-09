import * as React from 'react';
import './style.css';

const ModalLanche = ({ id = 'modalLanche', onClose = () => { } }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id={id} className="modalLanche" onClick={handleOutsideClick} >
            <div className='modalLanche-container'>
                <button className='close' onClick={onClose} />
                <div className='content'>
                    <h1>Atualize as informações</h1>
                    <div className='modalLanche-form'>
                        <label>Nome:</label>
                        <input id="name" type="text" placeholder='Nome' /><br />
                        <label>Adicione a imagem:</label><br />
                        <input id="file" type="file" /><br /><br />
                        <label id="ingredientes">Ingredientes:</label><br />
                        <select name="ingredientes" id="ingredientes" multiple>
                            <option value="ovo">Ovo</option>
                            <option value="alface">Alface</option>
                            <option value="humburguer">Hambúrger</option>
                            <option value="queijo">Queijo</option>
                            <option value="bacon">Bacon</option>
                        </select><br />
                        <p>Segure "CTRL" para selecionar mais de um Ingrediente.</p>
                        <button className="btn-salvar" type="submit">Salvar</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ModalLanche;