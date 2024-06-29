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

export const GetByIdSchema = object().shape({
        id_task: string().required()
});

export const AddSchema = object().shape({
        id: string().required('Id é Obrigatorio!'),
        descricao: string().required('Descrição é obrigatorio"'),
        data: string().required('Data é obrigatorio!'),
        status: string().required('Status é Obrigatorio!').test('addIsValid', (status) => {
            if(status === 'completed' || status === 'in_progress'){
                return true;
            }else{
                return false;
            }
        })
});

export const UpdateSchema = object().shape({
        id: string().required(),
        descricao: string().required(),
        data: string().required(),
        status: string().required('Status é Obrigatorio!').test('addIsValid', (status) => {
            if(status === 'completed' || status === 'in_progress'){
                return true;
            }else{
                return false;
            }
        })
});

export const UpdateSchemaParams = string().required().uuid();

export const DeleteSchema = string().required().uuid();
