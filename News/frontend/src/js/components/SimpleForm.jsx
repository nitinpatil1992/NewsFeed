import React, {Component} from "react";
import { fetchNews } from '../actions/newsActions';
import { connect } from "react-redux";

class SimpleForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: '', placeholder:'Search for news topic...'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.props.queryNews(this.state.value);
      return false
    }
  
    render() {
      return (
          <div className="row justify-content-center">
            <form role="form" className="form-group" onSubmit={this.handleSubmit}>
            <div >
                <input 
                    className="form-control" 
                    type="text" 
                    placeholderText={this.state.placeholder}
                    value={this.state.value} 
                    onChange={this.handleChange} />
            </div>
            <div className="row justify-content-center">
                <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
            </form>
        </div>
      );
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      // This function will be available in component as `this.props.fetchTodos`
      queryNews: function(value) {
        
        dispatch(fetchNews(value));
      }
    };
  }
  
  export default connect(null, mapDispatchToProps)(SimpleForm);