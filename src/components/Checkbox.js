import React from 'react';
import PropTypes, { func } from 'prop-types';
import classNames from 'classnames';

export default class Checkbox extends React.Component {


  constructor(props) {
    super(props);
    const checked = this.props.defaultChecked||props.checked;

    this.state = {
      checked,
    };
  }
  static defaultProps = {
    prefixCls: 'light-checkbox',
    style: {},
    type: 'checkbox',
    checked: false,
  };

  onClick = (e) => {
  
    if (this.props.disabled) {
      return;
    }
    this.setState({
      checked: !this.state.checked,
    },()=>{
      this.props.onClick(this)
    });
  };

  render() {
    const {
      prefixCls,
      className,
      style,
      name,
      type,
      disabled,
      onClick,
    } = this.props;


    // const { checked } = this.state;
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: this.state.checked,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <span className={classString} style={style} onClick={this.onClick.bind(this.props)}>

      </span>
    );
  }
}
