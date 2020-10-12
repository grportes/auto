import { convFormatISO } from '@utils/date';

const STORE = 'abastecimento';

export const saveAbastecimento = (connection, abastecimento) => {
    const novoAbastecimento = {
        ...abastecimento,
        km: parseFloat(abastecimento.km),
        valor: parseFloat(abastecimento.valor),
        data: convFormatISO({ data: abastecimento.dia, hora: abastecimento.hora })
    };
    delete novoAbastecimento.dia;
    delete novoAbastecimento.hora;
    return new Promise((resolve, reject) => {
        const request  = connection
            .transaction([STORE], 'readwrite')
            .objectStore(STORE)
            .add(novoAbastecimento);
        request.onsuccess = e => resolve();
        request.onerror = e => {
            console.error(e.target.error);
            reject('Falhou registro de abastecimento!');
        }
    });
};