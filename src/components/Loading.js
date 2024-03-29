import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '20px',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    textShadow: `0 3px 3px var(--black-darkest)`,
  },
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.text,
    };
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  };

  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };

  componentDidMount() {
    const { speed, text } = this.props;

    this.interval = window.setInterval(() => {
      this.state.content === `${text}...`
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + '.' }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { content } = this.state;
    return <p style={styles.content}>{content}</p>;
  }
}
