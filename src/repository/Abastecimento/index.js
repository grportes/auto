import {convFormatISO} from '@utils/date';

class Repository {

    static save(obj) {
        const novoAbastecimento = {
            ...obj,
            km: parseFloat(obj.km),
            valor: parseFloat(obj.valor),
            data: convFormatISO({data: obj.dia, hora: obj.hora})
        };
        delete novoAbastecimento.dia;
        delete novoAbastecimento.hora;
    }

}

export default Repository;