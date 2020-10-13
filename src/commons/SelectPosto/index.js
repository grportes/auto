import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Select from '@material-ui/core/Select';

import PostoAbastecimentoContext from '@context/postoAbastecimento';

const Componente = () => {

    const {postos} = useContext(PostoAbastecimentoContext);

    const [idPosto, setIdPosto] = useState(0);

    const handleChange = (event) => {
        const index = event.currentTarget.options.selectedIndex;
        console.log(event.currentTarget.options[index].value);
        
        setIdPosto(event.currentTarget.options[index].value);
    };

    return (
        <Select
            native
            value={idPosto}
            onChange={handleChange}
            inputProps={{
                name: 'age',
                id: 'age-native-simple',
            }}
        >
            <option 
                aria-label="None" 
                value={idPosto} 
            />
            {
                postos.map(posto => <option key={posto.id} value={posto.id}>{posto.fantasia}</option>)
            }
        </Select>
    );
};

export default Componente;