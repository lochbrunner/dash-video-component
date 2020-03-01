import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ControlBar, Player} from 'video-react';

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

    this.state = {source: props.source, prev_state: null, prev_time: null};
  }
  render() {
    const {id, source, height, width, fluid, state, time} = this.props;
    if (this.player) {
      const player_state = this.player.getState().player;
      if (state === 'play' && player_state.paused) {
        this.player.play();
      } else if (state === 'pause' && !player_state.paused) {
        this.player.pause();
      }
      if (time && time !== this.state.prev_time) {
        this.player.seek(time);
        this.state.prev_time = time;
      }
      this.state.prev_state = state;

      if (time && time !== player_state.seekingTime) {
        this.player.seek(time);
      }
    }

    return (<div id = {id}>
            <Player ref = {p => this.player = p} autoPlay fluid =
                 {fluid} width = {width} height = {height} src = {source}>
            <ControlBar autoHide = {true} disableDefaultControls />
            </Player>
        </div>);
  }
}

DashVideoComponent.defaultProps = {
  height: 640,
  width: 1024,
  fluid: true,
  autoPlay: true,
  state: 'play',
  time: null,
};

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
   * if specified, the video automatically begins to play back as soon
   * as it can do so without stopping to finish loading the data.
   */
  autoPlay: PropTypes.bool,

  /**
   * Pause or playing
   */
  state: PropTypes.any,

  /**
   * Set this property to seek to the specific time
   */
  time: PropTypes.number,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};
