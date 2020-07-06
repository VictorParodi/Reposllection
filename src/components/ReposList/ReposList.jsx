import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './../../actions';
import { parseTableData, headers } from './helper';
import { Icon, Menu, Table } from 'semantic-ui-react';

class ReposList extends React.Component {
    componentDidMount() {
        this.props.fetchRepos('VictorParodi', 1);
    }

    renderTableHeaders = () => {
        return headers.map((header) => {
            return (
                <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
            );
        });
    }

    renderTableCells = () => {
        return (
            this.props.repos.map((repo) => {
                const { id, name, description, language, default_branch, git_url } = repo;
                const notData = ' --- ';

                return (
                    <Table.Row key={id || notData}>
                        <Table.Cell>{name || notData}</Table.Cell>
                        <Table.Cell>{description || notData}</Table.Cell>
                        <Table.Cell>{language || notData}</Table.Cell>
                        <Table.Cell>{default_branch || notData}</Table.Cell>
                        <Table.Cell>{git_url || notData}</Table.Cell>
                    </Table.Row>
                );
            })
        );
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        { this.renderTableHeaders() }
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { this.renderTableCells() }
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
    return parseTableData(state.repos.data);
}

export default connect(mapStateToProps, {
    fetchRepos
})(ReposList);