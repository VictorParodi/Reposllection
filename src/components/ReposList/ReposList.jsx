import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './../../actions';
import { Icon, Menu, Table, Label } from 'semantic-ui-react';

class ReposList extends React.Component {
    componentDidMount() {
        this.props.fetchRepos('VictorParodi', 1);
    }

    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Language</Table.HeaderCell>
                        <Table.HeaderCell>Default branch</Table.HeaderCell>
                        <Table.HeaderCell>Git url</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Label ribbon>Repo name</Label>
                        </Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            <Label ribbon>Repo name</Label>
                        </Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            <Label ribbon>Repo name</Label>
                        </Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                        <Table.Cell>Repo data</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return { repos: state.repos.data };
}

export default connect(mapStateToProps, {
    fetchRepos
})(ReposList);