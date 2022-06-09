import * as React from 'react';
import { useState } from 'react';
import CadastrarIngredientes from '../../components/CadastroIngredientes';
import './style.css';

const CadastroHamburguer = () => {
    const [isModalVisible, setIsmodalVisible] = useState(false);

    return (
        <>
            <h1>Cadastro de Hambúrguers</h1>
            <div className='formulario'>
                <form action="#" method="post">
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
                </form>
                <div className='ClickButton'>
                    <button className='btn-ingredientes' onClick={() => setIsmodalVisible(true)} >Cadastrar Ingredientes</button>
                    {isModalVisible ? <CadastrarIngredientes onClose={() => setIsmodalVisible(false)} /> : null}
                </div>
            </div>
        </>
    );
}

export default CadastroHamburguer;