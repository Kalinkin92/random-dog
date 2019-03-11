import React, { Component } from 'react';
import './App.css';
import { fetchDog } from '../../actions/actions';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        return (
            <div>
              <button onClick={() => fetchDog(this.props.dispatch)}>Show Dog</button>
                {this.props.loading
                    ? <p>Loading...</p>
                    : this.props.error
                        ? <p>Error, try again</p>
                        : <p><img src={this.props.url}/></p>}
            </div>
        )
    }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

/*const mapDispatchToProps = dispatch => {
  return {

  }
};*/

export default connect(mapStateToProps)(App);
