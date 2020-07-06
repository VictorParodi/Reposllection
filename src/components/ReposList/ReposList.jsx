import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { fetchRepos, fetchGitUser, goToNextPage, goToBackPage } from './../../actions';
import { parseTableData, headers } from './helper';
import { Icon, Menu, Table } from 'semantic-ui-react';

const ReposList = (props) => {
    const [ arrow, setArrow ] = useState(true);
    const arrowIcon = arrow ? 'up' : 'down';

    useEffect(() => {
        props.fetchRepos(props.gitUser, props.page);
    }, [ props.gitUser, props.page ]);

    const onPageNext = () => {;
        props.goToNextPage(props.page);
    }

    const onPageBack = () => {
        props.goToBackPage(props.page);
    }

    const handleSortDir = (header) => {
        setArrow(!arrow);
        props.fetchRepos(props.gitUser, props.page, arrow, header);
    }

    const renderTableHeaders = () => {
        return headers.map((header) => {
            return (
                <Table.HeaderCell key={header}>
                    {header}
                    <Icon name={`chevron ${arrowIcon}`} onClick={(header) => handleSortDir(header)} />
                </Table.HeaderCell>
            );
        });
    }

    const renderTableCells = () => {
        return (
            props.repos.map((repo, index) => {
                const { id, name, description, language, default_branch, git_url } = repo;
                const notData = ' --- ';

                return (
                    <Table.Row key={id || index}>
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

    const TableComponet = (
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    { renderTableHeaders() }
                </Table.Row>
            </Table.Header>

            <Table.Body>
                { renderTableCells() }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon onClick={onPageBack}>
                                <Icon name='chevron left' />
                            </Menu.Item>

                            <Menu.Item as='a'>
                                { props.page }
                            </Menu.Item>
                            
                            <Menu.Item as='a' icon onClick={onPageNext}>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );

    return props.gitUser ? TableComponet : <h1>Please, register some data</h1>;
}

const mapStateToProps = (state) => {
    const repos = parseTableData(state.repos);

    return {
        repos: repos,
        page: state.page,
        gitUser: state.gitUser
    };
}

export default connect(mapStateToProps, {
    fetchRepos,
    fetchGitUser,
    goToNextPage,
    goToBackPage
})(ReposList);