import React from 'react'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import SuggestItem from './suggest-item';

/**
 * The list with suggestions. Either from an API or provided as fixture
 * @param {Object} props The component's props
 * @return {JSX} The icon component.
 */
export default class SuggestList extends React.Component {
  render() {
    const classes = classnames(
      'geosuggest__suggests',
      {'geosuggest__suggests--hidden': this.props.isHidden}
    );

    return <ul className={classes}>
      {this.props.suggests.map(suggest => {
        const isActive = this.props.activeSuggest &&
          suggest.placeId === this.props.activeSuggest.placeId;

        return <SuggestItem key={suggest.placeId}
          className={suggest.className}
          suggest={suggest}
          isActive={isActive}
          onMouseDown={this.props.onSuggestMouseDown}
          onMouseOut={this.props.onSuggestMouseOut}
          onSelect={this.props.onSuggestSelect} />;
      })}
    </ul>;
  }
}

SuggestList.defaultProps = {
  isHidden: true,
  suggests: []
};
