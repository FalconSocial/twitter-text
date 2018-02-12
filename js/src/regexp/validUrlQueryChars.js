import cyrillicLettersAndMarks from './cyrillicLettersAndMarks';
import latinAccentChars from './latinAccentChars';
import regexSupplant from '../lib/regexSupplant';

const validUrlQueryChars = regexSupplant(/[a-z0-9!?\*'"@\(\);:&=\+\$\/%#\[\]\-_\.,~|\{\}#{cyrillicLettersAndMarks}#{latinAccentChars}]/i,
    { cyrillicLettersAndMarks, latinAccentChars }
);
export default validUrlQueryChars;
