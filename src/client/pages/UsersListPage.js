import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions/index';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }
    render() {
        return (
            <div>
                {this.head()}
                Here is a list of users:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStatesToProps(state) {
    return { users: state.users }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStatesToProps, { fetchUsers })(UserList),
    loadData,
};