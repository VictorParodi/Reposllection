import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import RegisterDataForm from './../../components/RegisterData/RegisterDataForm';
import ReposList from './../../components/ReposList/ReposList';

class Home extends React.Component {
    state = {
        isOpen: false
    }

    openCloseRegisterForm = () => {
        this.setState((state) => ({ isOpen: !state.isOpen }));
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
                    </Menu>
                </header>

                <main>
                    <ReposList />
                    <RegisterDataForm isOpen={isOpen} closeModal={this.openCloseRegisterForm} />
                </main>
            </div>
        )
    }
}

export default Home;