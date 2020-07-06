import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './../../actions';

class ReposList extends React.Component {
    componentDidMount() {
        this.props.fetchRepos('VictorParodi', 1);
    }

    render() {
        return (
            <h1>Repos List</h1>
        );
    }
}

const mapStateToProps = (state) => {
    return { repos: state.repos.data };
}

export default connect(mapStateToProps, {
    fetchRepos
})(ReposList);