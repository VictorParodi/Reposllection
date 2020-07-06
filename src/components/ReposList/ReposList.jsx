import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRepos, goToNextPage, goToBackPage } from './../../actions';
import { useCookies } from 'react-cookie';
import { parseTableData, headers } from './helper';
import { Icon, Menu, Table } from 'semantic-ui-react';

const ReposList = (props) => {
    const [ cookies ] = useCookies();
    const { user } = cookies;
    const gitUser = props.gitUser || user.gituser

    useEffect(() => {
        props.fetchRepos(gitUser, props.page);
    }, [ props.gitUser, props.page ]);

    const onPageNext = () => {
        props.goToNextPage(props.page);
    }

    const onPageBack = () => {
        props.goToBackPage(props.page);
    }

    const renderTableHeaders = () => {
        return headers.map((header) => {
            return (
                <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
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

    return (
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
                            
                            <Menu.Item as='a' icon onClick={onPageNext}>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}

// class ReposList extends React.Component {
//     componentDidMount() {
//         this.props.fetchRepos('jjrb3', this.props.page);
//     }

//     componentDidUpdate() {
//         this.props.fetchRepos('jjrb3', this.props.page);
//     }

//     onPageNext = () => {
//         this.props.goToNextPage();
//     }

//     onPageBack = () => {
//         this.props.goToBackPage();
//     }

//     renderTableHeaders = () => {
//         return headers.map((header) => {
//             return (
//                 <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
//             );
//         });
//     }

//     renderTableCells = () => {
//         return (
//             this.props.repos.map((repo) => {
//                 const { id, name, description, language, default_branch, git_url } = repo;
//                 const notData = ' --- ';

//                 return (
//                     <Table.Row key={id || notData}>
//                         <Table.Cell>{name || notData}</Table.Cell>
//                         <Table.Cell>{description || notData}</Table.Cell>
//                         <Table.Cell>{language || notData}</Table.Cell>
//                         <Table.Cell>{default_branch || notData}</Table.Cell>
//                         <Table.Cell>{git_url || notData}</Table.Cell>
//                     </Table.Row>
//                 );
//             })
//         );
//     }

//     render() {
//         console.log(this.props.page);

//         return (
//             <Table celled striped>
//                 <Table.Header>
//                     <Table.Row>
//                         { this.renderTableHeaders() }
//                     </Table.Row>
//                 </Table.Header>

//                 <Table.Body>
//                     { this.renderTableCells() }
//                 </Table.Body>

//                 <Table.Footer>
//                     <Table.Row>
//                         <Table.HeaderCell colSpan='5'>
//                             <Menu floated='right' pagination>
//                                 <Menu.Item as='a' icon onClick={this.onPageBack}>
//                                     <Icon name='chevron left' />
//                                 </Menu.Item>
                                
//                                 <Menu.Item as='a' icon onClick={this.onPageNext}>
//                                     <Icon name='chevron right' />
//                                 </Menu.Item>
//                             </Menu>
//                         </Table.HeaderCell>
//                     </Table.Row>
//                 </Table.Footer>
//             </Table>
//         );
//     }
// }

const mapStateToProps = (state) => {
    const repos = parseTableData(state.repos.data);

    return {
        repos: repos,
        page: state.page,
        gitUser: state.gitUser
    };
}

export default connect(mapStateToProps, {
    fetchRepos,
    goToNextPage,
    goToBackPage
})(ReposList);