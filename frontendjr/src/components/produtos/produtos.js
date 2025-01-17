import React, { useState } from 'react';
import ListarProdutos from './listar-produtos';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
function Produtos(props) {

    const [exibirMsg, setExibirMsg] = useState(false);
    const [produto, setProduto] = useState('');

    function visivel() {
        return props.visivel ? null : 'hidden';
    }

    function exibirMensagem(produto) {
        setExibirMsg(true);
        setProduto(produto.name);
        setTimeout(() => {
            setExibirMsg(false)
        }, 3000);
    }

    return (
        <div className={visivel()}>
            <Alert
                variant="danger"
                style={{ margin: "10px" }}
                show={exibirMsg}>
                <b></b> Função não está integrada!
            </Alert>
            <ListarProdutos
                busca={props.busca}
                exibirMensagem={exibirMensagem}
                adicionarProduto={props.adicionarProduto} />
        </div>
    );
}

Produtos.propTypes = {
    visivel: PropTypes.bool.isRequired,
    adicionarProduto: PropTypes.func.isRequired
}

export default Produtos;