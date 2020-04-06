import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { timeout, animationDuration } from 'constants/transition';

class Transition extends PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        transition: { duration: animationDuration },
        delay: timeout,
        delayChildren: timeout,
      },

      exit: {
        opacity: 0,
        transition: { duration: animationDuration / 10 },
      },
    });

    return (
      <PoseGroup animateOnMount={true}>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Transition;
