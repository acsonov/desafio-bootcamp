import React from 'react';
import Button from '../../core/components/Button';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory();

    const handleCreate = () => {


    }

    return (
        <div className="search-main">
            <h1 className="search-title">Encontre um perfil no GitHub</h1>
            <div className="row">
              <div className = "col-6">
              <input 
                type="text" 
                className ="form-control search-perfil"
                placeholder = "Usuário GitHub"
                />
              </div>
              </div>
            <div className="search-button">
                <button className="btn btn-primary btn-4p" onClick={handleCreate}>
                    Encontrar
                </button>

            </div>
        </div>
    )
};

export default Search;
