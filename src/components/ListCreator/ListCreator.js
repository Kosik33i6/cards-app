import React, { Component } from 'react';

import PropTypes from 'prop-types';
import shortid from 'shortid';

import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './ListCreator.scss';

class ListCreator extends Component {

  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
    inputs: PropTypes.array.isRequired,
    action: PropTypes.func,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    inputValue: {
      title: '',
      description: '',
      image: '',
    },
    visibleButtons: false,
  }

  handleChange = event => {
    const inputName = event.target.name;
    const inputValue = {...this.state.inputValue};

    inputValue[inputName] = event.target.value;

    this.setState({
      inputValue,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => {
    const {title, description, image} = this.state.inputValue;
    const condition = title != '' && description != '' && image != '';
    if(condition){
      this.props.action(title, description, image);
      this.setState({
        inputValue: {
          title: '',
          description: '',
          image: '',
        },
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {
    let confirmResult;

    const {title, description, image: imageUrl} = this.state.inputValue;

    if((title || description || imageUrl) > 0) {
      const message = 'You are sure you want to cancel?';
      confirmResult = window.confirm(message);
    }

    if(confirmResult) {
      this.setState({
        inputValue: {
          title: '',
          description: '',
          image: '',
        },
        visibleButtons: false,
      });
    }
  }

  render() {

    const { inputs } = this.props;

    const inputsComponent = inputs.map(({placeholder, name}) => (
      <Input
        key={() => shortid.generate()}
        type="text"
        placeholder={placeholder}
        value={this.state.inputValue[name]}
        change={this.handleChange}
        name={name}
      />
    ));

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Add new list</h2>
        {inputsComponent}
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}

export default ListCreator;
