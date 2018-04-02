import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import queryString from 'query-string';
import AgreementTable from './AgreementTable';
import AgreementSearch from './AgreementSearch';
import { Banner } from '../common';
import { SELECT_RUP_BANNER_CONTENT, SELECT_RUP_BANNER_HEADER } from '../../constants/strings';

const propTypes = {
  agreementsState: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({ location: {} }).isRequired,
};

export class Agreement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: queryString.parse(props.history.location.search).term || '',
    };
    this.searchAgreementsWithDebounce = debounce(this.handleSearchInput, 1000);
  }

  handlePaginationChange = (currentPage) => {
    const { history, history: { location } } = this.props;
    const parsedParams = queryString.parse(location.search);
    parsedParams.page = currentPage;
    history.push(`${location.pathname}?${queryString.stringify(parsedParams)}`);
  }

  handleSearchInput = (term) => {
    const { history, history: { location } } = this.props;
    const parsedParams = queryString.parse(location.search);
    // show new results from page 1
    parsedParams.page = 1;
    parsedParams.term = term;
    history.push(`${location.pathname}?${queryString.stringify(parsedParams)}`);
  }

  render() {
    const {
      agreementsState,
    } = this.props;

    const {
      searchTerm,
    } = this.state;

    return (
      <div className="agreement">
        <Banner
          header={SELECT_RUP_BANNER_HEADER}
          content={SELECT_RUP_BANNER_CONTENT}
        >
          <AgreementSearch
            placeholder="Enter Search Term"
            handleSearchInput={this.searchAgreementsWithDebounce}
            searchTerm={searchTerm}
          />
        </Banner>

        <div className="agreement__table">
          <AgreementTable
            agreementsState={agreementsState}
            handlePaginationChange={this.handlePaginationChange}
          />
        </div>
      </div>
    );
  }
}

Agreement.propTypes = propTypes;
export default Agreement;
