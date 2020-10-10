import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import useStyles from './styles';

const getDate = () => {
    const date = new Date();
    return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
}

const Componente = () => {

    const [abastecimento, setAbastecimento] = useState({
        km: '',
        dia: getDate(),
        hora: '',
        valor: 0.00
    });

    const setValue = ({ target }) => setAbastecimento({ ...abastecimento, [target.name]: target.value });

    const classes = useStyles();

    return (
        <form
            className={classes.root}
            autoComplete='off'
            onSubmit={e => {
                e.preventDefault();
                console.log(abastecimento);
            }}

        >

            <TextField
                label='Km:'
                name='km'
                value={abastecimento.km}
                onChange={setValue}
                required
            />

            <TextField
                type='date'
                label='Data:'
                name='dia'
                value={abastecimento.dia}
                onChange={setValue}
                InputLabelProps={{
                    shrink: true,
                }}
                required
            />

            <TextField
                type='time'
                label='Hora:'
                name='hora'
                value={abastecimento.hora}
                onChange={setValue}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
                required
            />

            <TextField
                label='Valor:'
                name='valor'
                value={abastecimento.valor}
                onChange={setValue}
                required
            />

            <Button 
                type='submit'
                variant='contained' 
                color='primary'
            >
                Registrar
            </Button>

            <Fab 
                color='primary' 
                aria-label='add'
            >
                <AddIcon />
            </Fab>

        </form>
    );
};

export default Componente;