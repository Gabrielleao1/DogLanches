import * as React from 'react';
import { useState, useEffect } from 'react';
import { CheckCircle, Trash2 } from 'react-feather';
import Modal from '../../components/Modal';
import ModalExcluirIngrediente from '../../components/ModalExcluir-Ingrediente/index';
import axios from "axios";
import './style.css';

const Ingrediente = () => {
  const [isModalVisible, setIsmodalVisible] = useState(false);
  const [isModalExcluirVisible, setIsmodalExcluirVisible] = useState(false);
  const [ingrediente, setIngrediente] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7198/api/ingredientes")
      .then(res => setIngrediente(res.data))
      .catch(err => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <h1 id="tabelLabel">Ingredientes Cadastrados</h1>

      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ingrediente.map((item, index) => (
            <tr key={index}>
              <td>{item?.name}</td>
              <td>{item?.price}</td>
              <td>
                <Trash2 color="red" size={18} onClick={() => setIsmodalExcluirVisible(true)} />{isModalExcluirVisible ? <ModalExcluirIngrediente onClose={() => setIsmodalExcluirVisible(false)} /> : null}
                <CheckCircle color="green" size={18} onClick={() => setIsmodalVisible(true)} />{isModalVisible ? <Modal onClose={() => setIsmodalVisible(false)} /> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

};

export default Ingrediente;