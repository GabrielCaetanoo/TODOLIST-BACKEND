import {object, string} from 'yup';

export const GetSchema = object().shape({
    status: string().required().test('isValid', (status) => {
        if(status === 'in-progress' || status === "completed") {
            return true;
        }else{
            return false;
        }
    })

});