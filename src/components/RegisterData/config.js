import * as Yup from 'yup';

const INITIAL_VALUES = {
    name: '',
    lastname: '',
    idnumber: '',
    birthdate: '',
    email: '',
    gituser: ''
};

const ERROR_SCHEMA = {
    name: Yup.string()
            .min(2, 'Reposllection says the name is too short')
            .max(20, 'Reposllection says the name is too long')
            .required('Reposllection says a name is required'),

    lastname: Yup.string()
                .min(2, 'Reposllection says the lastname is too short')
                .max(20, 'Reposllection says the lastname is too long')
                .required('Reposllection says a lastname is required'),

    idnumber: Yup.number()
                .min(1000000, 'Reposllection says the ID number is too short')
                .required('Reposllection says an ID number is required'),
                
    birthdate: Yup.string().required('Reposllection says a bith date is required'),

    email: Yup.string().email('Reposllection says this is an invalid email').required('Reposllection says an email is required'),

    gituser: Yup.string()
                .min(2, 'Reposllection says the Github username is too short')
                .max(20, 'Reposllection says the Github username is too long')
                .required('Reposllection says a Github username is required'),
}

const FORM_FIELDS = [
    {
        field: 'name',
        label: 'First name',
        type: 'text',
        placeholder: 'Enter a name'
    },

    {
        field: 'lastname',
        label: 'Last name',
        type: 'text',
        placeholder: 'Enter a lastname'
    },

    {
        field: 'idnumber',
        label: 'ID Number',
        type: 'text',
        placeholder: 'Enter an ID number'
    },

    {
        field: 'birthdate',
        label: 'Birth Date',
        type: 'date',
        placeholder: 'Enter a birth date'
    },

    {
        field: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter an email'
    },

    {
        field: 'gituser',
        label: 'Github username',
        type: 'text',
        placeholder: 'Enter an Github username'
    }
];

export {
    INITIAL_VALUES,
    ERROR_SCHEMA,
    FORM_FIELDS
}