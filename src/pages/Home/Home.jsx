import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import RegisterDataForm from './../../components/RegisterData/RegisterDataForm';

class Home extends React.Component {
    state = {
        isOpen: false
    }

    openCloseRegisterForm = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;

        return (
            <div className="ui container">
                <header>
                    <Menu text>
                        <Menu.Item header>
                            <Icon name='github alternate' size="big" />
                            Reposllection
                        </Menu.Item>

                        <Menu.Item
                            onClick={this.openCloseRegisterForm}
                            name='Register data'
                        />

                        <Menu.Item name='Link 1' />
                        <Menu.Item name='Link 2' />
                        <Menu.Item name='Link 3' />
                    </Menu>
                </header>

                <main>
                    <RegisterDataForm isOpen={isOpen} closeModal={this.openCloseRegisterForm} />
                </main>
            </div>
        )
    }
}

export default Home;