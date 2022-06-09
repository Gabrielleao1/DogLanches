import * as React from 'react';
import { useState, useEffect } from 'react';
import { CheckCircle, Trash2 } from 'react-feather';
import productImg from '../../assets/images/lanche2.png'
import ModalExcluir from '../ModalExcluir';
import ModalLanche from '../ModalLanche';
import axios from 'axios';
import './style.css'

const CardBurguer = () => {
    const [isModalVisible, setIsmodalVisible] = useState(false);
    const [isModalExcluirVisible, setIsmodalExcluirVisible] = useState(false);
    const [burguer, setBurguer] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7198/api/burguers")
            .then(res => {
                setBurguer(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <>
            <div className='product-container'>
                {burguer.map((item, index) => (
                    <div className='product-content' key={index}>
                        <div className='product-card'>
                            <div className='product-header'>
                                <img src={productImg} alt="Lanche" />
                            </div>
                            <hr />
                            <div className='product-footer'>
                                <h3>{item?.name}</h3>
                                <p><strong>Ingredientes: </strong>{item?.ingrediente}</p>
                                <div className='product-footer-items'>
                                    <p><strong>R$:</strong> 6,50</p>
                                    <div className='svgs'>
                                        <Trash2 color="red" size={18} onClick={() => setIsmodalExcluirVisible(true)} />{isModalExcluirVisible ? <ModalExcluir idBurguers={item.id} onClose={() => setIsmodalExcluirVisible(false)} /> : null}
                                        <CheckCircle color="green" size={18} onClick={() => setIsmodalVisible(true)} />{isModalVisible ? <ModalLanche onClose={() => setIsmodalVisible(false)} /> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CardBurguer;
