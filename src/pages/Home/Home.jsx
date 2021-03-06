import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import RegisterDataForm from './../../components/RegisterData/RegisterDataForm';
import ReposList from './../../components/ReposList/ReposList';
import ReposMatch from './../../components/ReposMatch/ReposMatch';

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
                            className="register-link"
                            onClick={this.openCloseRegisterForm}
                            name='Register data'
                        />
                    </Menu>
                </header>

                <main>
                    <ReposMatch />
                    <ReposList />
                    <RegisterDataForm isOpen={isOpen} closeModal={this.openCloseRegisterForm} />
                </main>
            </div>
        )
    }
}

export default Home;