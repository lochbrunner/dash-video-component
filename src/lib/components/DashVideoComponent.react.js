import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Player} from 'video-react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

export default class DashVideoComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {source: props.source};
  }
  render() {
    const {id, source, height, width, fluid} = this.props;

        return (
            <div id={id}>
                <Player ref={p => this.player = p} autoPlay fluid={fluid} width={width} height={height} >
                    <source src={
      source} />
                </Player>
            </div>
        );
  }
}

DashVideoComponent.defaultProps = {height:640, width:1024, fluid:true};

DashVideoComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  source: PropTypes.string.isRequired,

  /**
   * In fluid mode, it’s 100% wide all the time, 
   * the height will be calculated by the video's ratio.
   */
  fluid: PropTypes.bool,
  /**
   * The width value of video, could be an number or percent or auto.
   * (This attribute is effective only if you set fluid as false)
   */
  width: PropTypes.number,
  /**
   * The height value of video, could be an number or percent or auto.
   * (This attribute is effective only if you set fluid as false)
   */
  height: PropTypes.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};
