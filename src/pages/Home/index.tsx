import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h1 className="text-title">Desafio do Capítulo 3, <br /> Bootcamp DevSuperior</h1>
        <div className="btn-home">
            <Link to="/search">
                <Button text="começar" />
            </Link>
        </div>
    </div>


);

export default Home;
