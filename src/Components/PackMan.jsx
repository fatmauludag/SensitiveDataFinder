/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { keyframes, css, jsx } from '@emotion/core';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

// This returns an animation
const pacman = [
  keyframes`
      0% {transform: rotate(0deg)} 
      50% {transform: rotate(-44deg)}
    `,
  keyframes`
      0% {transform: rotate(0deg)} 
      50% {transform: rotate(44deg)}
    `
];

class Loader extends React.Component {
    ball = () => {
      const { size, sizeUnit } = this.props;

      return keyframes`
          75% {opacity: 0.7}
          100% {transform: translate(___CSS_0___, ___CSS_1___)}
        `;
    };

    ballStyle = i => {
      const {
        color, margin, size, sizeUnit
      } = this.props;

      return css`{
            width: ___CSS_0___;
            height: ___CSS_1___;
            background-color: ___CSS_2___;
            margin: ___CSS_3___;
            border-radius: 100%;
            transform: translate(0, ___CSS_4___);
            position: absolute;
            top: ___CSS_5___px;
            left: ___CSS_6___;
            animation: ___CSS_7___ 1s ___CSS_8___s infinite linear;
            animation-fill-mode: both;
        }`;
    };

    s1 = () => {
      const { size, sizeUnit } = this.props;

      return `${size}${sizeUnit} solid transparent`;
    };

    s2 = () => {
      const { size, sizeUnit, color } = this.props;

      return `${size}${sizeUnit} solid ${color}`;
    };

    pacmanStyle = i => {
      const { size, sizeUnit } = this.props;

      const s1 = this.s1();
      const s2 = this.s2();

      return css`{
            width: 0;
            height: 0;
            border-right: ___CSS_0___;
            border-top: ___CSS_1___;
            border-left: ___CSS_2___;
            border-bottom: ___CSS_3___;
            border-radius: ___CSS_4___;
            position: absolute;
            animation: ___CSS_5___ 0.8s infinite ease-in-out;
            animation-fill-mode: both;
        }`;
    };

    wrapper = () => {
      const { size, sizeUnit } = this.props;

      const wrapper = css`{
            position: relative;
            font-size: 0;
            height: ___CSS_0___;
            width: ___CSS_1___;
        }`;

      return this.props.css ? css`___CSS_0___;___CSS_1___` : wrapper;
    };

  pac = () => this.pacmanStyle(0);
  man = () => this.pacmanStyle(1);

  render() {
    const { loading } = this.props;

    return loading ?
      <div css={this.wrapper()}>
        <div css={this.pac()} />
        <div css={this.man()} />
        <div css={this.ballStyle(2)} />
        <div css={this.ballStyle(3)} />
        <div css={this.ballStyle(4)} />
        <div css={this.ballStyle(5)} />
      </div> : null;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.string,
  sizeUnit: PropTypes.string,
  css: PropTypes.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 25,
  margin: '2px',
  sizeUnit: 'px',
  css: ''
};

const Component = onlyUpdateForKeys(['loading', 'color', 'size', 'margin', 'sizeUnit', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
export default Component;