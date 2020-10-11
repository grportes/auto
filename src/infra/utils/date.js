import formatISO from 'date-fns/formatISO';
import parse from 'date-fns/parse'

export const getDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
};

export const convFormatISO = ({data, hora}) => {
    const str = `${data} ${hora}`;
    const newDate = parse(str, 'yyyy-MM-dd HH:mm', new Date());
    return formatISO(newDate);
};