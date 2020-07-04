import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class RegisterDataForm extends React.Component {
    render() {
        const { isOpen, closeModal } = this.props;

        return (
            <Modal
                open={isOpen}
                closeIcon={true}
                onClose={closeModal}
            >
                <Modal.Header>Register Data</Modal.Header>

                <Modal.Content>
                    <Modal.Description>
                        <p>Displying a Modal</p>
                    </Modal.Description>
                </Modal.Content>

                <Modal.Actions>
                    <Button color='green' inverted>
                        <Icon name='checkmark' /> Submit
                    </Button>

                    <Button color='red' inverted onClick={closeModal}>
                        <Icon name='remove' /> Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default RegisterDataForm;