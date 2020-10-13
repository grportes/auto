import React from 'react';
import ReactDOM from 'react-dom';

import {PostoAbastecimentoProvider} from './context/postoAbastecimento';
import Abastecimento from './pages/RegistraAbastecimento';


ReactDOM.render(
    <PostoAbastecimentoProvider>
        <Abastecimento />
    </PostoAbastecimentoProvider>,
    document.getElementById('container')
);