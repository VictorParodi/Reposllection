import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRepos, fetchMatchedRepos } from './../../actions';
import { Form } from 'semantic-ui-react';

const ReposMatch = (props) => {
    const [ matchInput, setMatchInput ] = useState('');

    const handleMatchChange = (event) => {
        const inputValue = event.target.value 
        setMatchInput(inputValue);
        inputValue.length >=3 ? props.fetchMatchedRepos(inputValue) : props.fetchRepos(props.gitUser, props.page);
    };

    const FormMatchComponent = (
        <Form>
            <Form.Input
                type='text'
                label='Repos search'
                placeholder="Enter the repo's name"
                value={matchInput}
                onChange={(event) => handleMatchChange(event)}
            />
        </Form>
    );

    return (
        props.gitUser ? FormMatchComponent : null
    );
}

const mapStateToProps = (state) => {
    return {page: state.page, gitUser: state.gitUser};
}

export default connect(mapStateToProps, {
    fetchRepos,
    fetchMatchedRepos
})(ReposMatch);