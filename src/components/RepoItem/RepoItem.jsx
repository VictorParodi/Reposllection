import React from 'react';
import { Table } from 'semantic-ui-react';

const RepoItem = (props) => {
    const { key, name, description, language, default_branch, git_url } = props.repo;
    const notData = ' --- ';

    return (
        <Table.Row key={key}>
            <Table.Cell>{name || notData}</Table.Cell>
            <Table.Cell>{description || notData}</Table.Cell>
            <Table.Cell>{language || notData}</Table.Cell>
            <Table.Cell>{default_branch || notData}</Table.Cell>
            <Table.Cell>{git_url || notData}</Table.Cell>
        </Table.Row>
    );
}

export default RepoItem;