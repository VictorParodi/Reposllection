import _map from 'lodash/map';
import _pick from 'lodash/pick';
const headers = ['Name', 'Description', 'Language', 'Default branch', 'Git url'];
const fields = ['id', 'name', 'description', 'language', 'default_branch', 'git_url'];

const parseTableData = (reposData) => {
    const repos = _map(reposData, (repo) => {
        return _pick(repo, fields);
    })

    return { repos };
}

export { parseTableData, headers };