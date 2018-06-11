import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
    class RequireAuth extends Component {
        render() {
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/" />
                    break;
                case null:
                    return <div>Loading...</div>
                    break
                default:
                    return <ChildComponent {...this.props} />
                    break;
            }
        }
    }
    function mapStateToProps({ auth }) {
        return { auth };
    }

    return connect(mapStateToProps)(RequireAuth);
};

