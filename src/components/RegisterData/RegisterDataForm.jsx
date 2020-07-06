import React from 'react';
import { connect } from 'react-redux';
import { fetchGitUser, goToBackPage } from './../../actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
import { Button, Modal, Icon, Form } from 'semantic-ui-react';
import { INITIAL_VALUES, ERROR_SCHEMA, FORM_FIELDS} from './config';
import './RegisterDataForm.css';

const RegisterDataForm = (props) => {
    const { isOpen, closeModal } = props;
    const [ cookies, setCookie ] = useCookies();

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: Yup.object().shape(ERROR_SCHEMA),

        onSubmit: (values, {resetForm}) => {
            setCookie('user', values, { path: '/' });
            props.fetchGitUser(values.gituser);
            props.goToBackPage(1);
            resetForm(INITIAL_VALUES);
            closeModal();
        }
    });

    const handleCloseModal = () => {
        formik.handleReset();
        closeModal();
    }

    const renderInputs = () => {
        return FORM_FIELDS.map(({ field, label, type, placeholder }) => {
            return (
                <Form.Input
                    key={field}
                    type={type}
                    className="column formGroup__input"
                    label={label}
                    placeholder={placeholder}
                    value={formik.values[field].trim()}
                    onChange={formik.handleChange(field)}
                    error={
                        formik.errors[field] && formik.touched[field]
                        ? { content: formik.errors[field], pointing: 'above' }
                        : false
                    }
                />
            );
        });
    }

    return (
        <Modal
            open={isOpen}
            closeIcon={true}
            onClose={closeModal}
        >
            <Modal.Header>Register Data</Modal.Header>

            <Modal.Content>
                <Form error className="ui grid">
                    <Form.Group className="two columns row formGroup">
                        { renderInputs() }
                    </Form.Group>
                </Form>
            </Modal.Content>

            <Modal.Actions>
                <Button
                    color='green'
                    inverted
                    type="submit"
                    onClick={formik.handleSubmit}
                >
                    <Icon name='checkmark' /> Submit
                </Button>

                <Button color='red' inverted onClick={handleCloseModal}>
                    <Icon name='remove' /> Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default connect(null, {
    fetchGitUser,
    goToBackPage
})(RegisterDataForm);