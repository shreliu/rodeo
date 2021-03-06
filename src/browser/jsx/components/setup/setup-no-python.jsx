import _ from 'lodash';
import React from 'react';
import FakeTerminal from './fake-terminal.jsx';
import Marked from '../marked/marked.jsx';

export default React.createClass({
  displayName: 'SetupNoPython',
  propTypes: {
    className: React.PropTypes.string,
    onCancel: React.PropTypes.func.isRequired,
    terminal: React.PropTypes.object.isRequired
  },
  render: function () {
    const displayName = this.constructor.displayName,
      props = this.props,
      text = props.text,
      className = [_.kebabCase(displayName)];

    if (props.className) {
      className.push(props.className);
    }

    return (
      <div className={className.join(' ')}>
        <div className="explanation"><Marked>{text.noPython}</Marked></div>
        <FakeTerminal {...props.terminal}/>
        <button className="btn btn-default btn-setup-action" onClick={_.partial(props.onTransition, 'installAnaconda')}>{text.installAnaconda}</button>
        <button className="btn btn-default btn-setup-action" onClick={_.partial(props.onTransition, 'manualCommand')}>{text.uniqueCommandForPython}</button>
      </div>
    );
  }
});
