import { CSSResult, css } from 'lit-element';

const style: CSSResult = css`
  :host {
    display: flex;
    flex-direction: column;
  }
  ha-card {
    flex-direction: column;
    flex: 1;
    padding: 16px 0;
    position: relative;
    overflow: hidden;
  }
  ha-card > div {
    padding: 0px 16px 16px 16px;
  }
  ha-card > div:last-child {
    padding-bottom: 0;
  }
  ha-card[points] .line--points,
  ha-card[labels] .graph__labels.--primary {
    opacity: 0;
    transition: opacity 0.25s;
    animation: none;
  }
  ha-card[labels-secondary] .graph__labels.--secondary {
    opacity: 0;
    transition: opacity 0.25s;
    animation: none;
  }
  /* ha-card:hover .graph__labels.--primary,
  ha-card:hover .graph__labels.--secondary, */
  ha-card[points]:hover .line--points {
    opacity: 1;
  }
  ha-card[fill] {
    padding-bottom: 0;
  }
  ha-card[fill] .graph {
    padding: 0;
    order: 10;
  }
  ha-card[fill] path {
    stroke-linecap: initial;
    stroke-linejoin: initial;
  }
  ha-card[fill] .graph__legend {
    order: -1;
    padding: 0 16px 8px 16px;
  }
  ha-card[fill] .info {
    padding-bottom: 16px;
  }
  ha-card[group] {
    box-shadow: none;
    padding: 0;
  }
  ha-card[group] > div {
    padding-left: 0;
    padding-right: 0;
  }
  ha-card[group] .graph__legend {
    padding-left: 0;
    padding-right: 0;
  }
  /* ha-card[hover] {
    cursor: pointer;
  } */
  .flex {
    display: flex;
    display: -webkit-flex;
    min-width: 0;
  }
  .header {
    justify-content: space-between;
    color: var(--ha-card-header-color, --primary-text-color);
  }
  .header[loc='center'] {
    justify-content: space-around;
  }
  .header[loc='left'] {
    align-self: flex-start;
  }
  .header[loc='right'] {
    align-self: flex-end;
  }
  .name {
    align-items: center;
    min-width: 0;
    letter-spacing: var(--mcg-title-letter-spacing, normal);
  }
  .name > span {
    font-size: 1.2em;
    font-weight: var(--mcg-title-font-weight, 500);
    max-height: 1.4em;
    min-height: 1.4em;
    opacity: 0.65;
  }
  .icon {
    color: var(--paper-item-icon-color, #44739e);
    display: inline-block;
    flex: 0 0 1.7em;
    text-align: center;
  }
  .icon > ha-icon {
    height: 1.7em;
    width: 1.7em;
  }
  .icon[loc='left'] {
    order: -1;
    margin-right: 0.6em;
    margin-left: 0;
  }
  .icon[loc='state'] {
    align-self: center;
  }
  .states {
    align-items: flex-start;
    font-weight: 300;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .states .icon {
    align-self: center;
    margin-left: 0;
  }
  .states[loc='center'] {
    justify-content: space-evenly;
  }
  .states[loc='right'] > .state {
    margin-left: auto;
    order: 2;
  }
  .states[loc='center'] .states--secondary,
  .states[loc='right'] .states--secondary {
    margin-left: 0;
  }
  .states[loc='center'] .states--secondary {
    align-items: center;
  }
  .states[loc='right'] .states--secondary {
    align-items: flex-start;
  }
  .states[loc='center'] .state__time {
    left: 50%;
    transform: translateX(-50%);
  }
  .states > .icon > ha-icon {
    height: 2em !important;
    width: 2em !important;
  }
  .states--secondary {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-left: 1rem;
    min-width: 0;
    margin-left: 1.4em;
  }
  .states--secondary:empty {
    display: none;
  }
  .state {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;
    min-width: 0;
  }
  .state--small {
    font-size: 0.6em;
    margin-bottom: 0.6rem;
    flex-wrap: nowrap;
  }
  .state--small > svg {
    position: absolute;
    left: -1.6em;
    align-self: center;
    height: 1em;
    width: 1em;
    border-radius: 100%;
    margin-right: 1em;
  }
  .state--small:last-child {
    margin-bottom: 0;
  }
  .states--secondary > :only-child {
    font-size: 1em;
    margin-bottom: 0;
  }
  .states--secondary > :only-child svg {
    display: none;
  }
  .state__value {
    display: inline-block;
    font-size: 2.4em;
    margin-right: 0.25rem;
    line-height: 1.2em;
  }
  .state__uom {
    flex: 1;
    align-self: flex-end;
    display: inline-block;
    font-size: 1.4em;
    font-weight: 400;
    line-height: 1.6em;
    margin-top: 0.1em;
    opacity: 0.6;
    vertical-align: bottom;
  }
  .state--small .state__uom {
    flex: 1;
  }
  .state__time {
    font-size: 0.95rem;
    font-weight: 500;
    bottom: -1.1rem;
    left: 0;
    opacity: 0.75;
    position: absolute;
    white-space: nowrap;
    animation: fade 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .states[loc='right'] .state__time {
    left: initial;
    right: 0;
  }
  .graph {
    align-self: flex-end;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    width: 100%;
  }
  .graph__container {
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .graph__container__svg {
    cursor: default;
    flex: 1;
  }
  svg {
    overflow: hidden;
    display: block;
  }
  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .fill[anim='false'] {
    animation: reveal 0.25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }
  .fill[anim='false'][type='fade'] {
    animation: reveal-2 0.25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }
  .line--points[anim='false'],
  .line[anim='false'] {
    animation: pop 0.25s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }
  .line--points[inactive],
  .line--rect[inactive],
  .fill--rect[inactive] {
    opacity: 0 !important;
    animation: none !important;
    transition: all 0.15s !important;
  }
  .line--points[tooltip] .line--point[inactive] {
    opacity: 0;
  }
  .line--point {
    cursor: pointer;
    fill: var(--primary-background-color, white);
    stroke-width: inherit;
  }
  .line--point:hover {
    fill: var(--mcg-hover, inherit) !important;
  }
  .bars {
    animation: pop 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .bars[anim] {
    animation: bars 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .bar {
    transition: opacity 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .bar:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  ha-card[gradient] .line--point:hover {
    fill: var(--primary-text-color, white);
  }
  path,
  .line--points,
  .fill {
    opacity: 0;
  }
  .line--points[anim='true'][init] {
    animation: pop 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }
  .fill[anim='true'][init] {
    animation: reveal 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }
  .fill[anim='true'][init][type='fade'] {
    animation: reveal-2 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }
  .line[anim='true'][init] {
    animation: dash 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }
  .graph__labels.--secondary {
    right: 0;
    margin-right: 0px;
  }
  .graph__labels {
    align-items: flex-start;
    flex-direction: column;
    font-size: calc(0.15em + 8.5px);
    font-weight: 400;
    justify-content: space-between;
    margin-right: 10px;
    padding: 0.6em;
    position: absolute;
    pointer-events: none;
    top: 0;
    bottom: 0;
    opacity: 0.75;
  }
  .graph__labels > span {
    cursor: pointer;
    background: var(--primary-background-color, white);
    border-radius: 1em;
    padding: 0.2em 0.6em;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .graph__legend {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 16px;
    flex-wrap: wrap;
  }
  .graph__legend__item {
    cursor: pointer;
    display: flex;
    min-width: 0;
    margin: 0.4em;
    align-items: center;
  }
  .graph__legend__item span {
    opacity: 0.75;
    margin-left: 0.4em;
  }
  .graph__legend__item svg {
    border-radius: 100%;
    min-width: 10px;
  }
  .info {
    justify-content: space-between;
    align-items: middle;
  }
  .info__item {
    display: flex;
    flex-flow: column;
    text-align: center;
  }
  .info__item:last-child {
    align-items: flex-end;
    text-align: right;
  }
  .info__item:first-child {
    align-items: flex-start;
    text-align: left;
  }
  .info__item__type {
    text-transform: capitalize;
    font-weight: 500;
    opacity: 0.9;
  }
  .info__item__time,
  .info__item__value {
    opacity: 0.75;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
  }
  @keyframes reveal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.15;
    }
  }
  @keyframes reveal-2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.4;
    }
  }
  @keyframes pop {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bars {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes dash {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      stroke-dashoffset: 0;
    }
  }
  .compass {
    display: block;
    width: 120px;
    height: 120px;
    position: relative;
    margin: 0 auto;
  }
  .compass > .direction {
    height: 100%;
    width: 100%;
    display: block;
    background: var(--primary-background-color);
    border-radius: 100%;
    border-width: 3px;
    border-color: var(--primary-color);
    border-style: solid;
    color: var(--primary-text-color);
  }
  .compass > .direction > p {
    text-align: center;
    margin: 0;
    padding: 30% 0 0 0;
    top: 30px;
    width: 100%;
    line-height: normal;
    display: block;
    font-size: 28px;
    font-weight: bold;
  }
  .compass > .direction > p > span {
    display: block;
    line-height: normal;
    font-size: 11px;
    font-weight: normal;
  }
  .compass > .indicator {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    /* substract the direction border width to get correct size */
    right: -3px;
    /* add the direction border width to get correct size */
    top: 3px;
  }
  .compass > .indicator:after {
    content: '';
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 30px solid var(--success-color);
    position: absolute;
    margin-left: 0;
    /* substract left+right border width from full size to center */
    left: calc((100% - 16px) / 2);
    z-index: 99;
  }
`;

export default style;