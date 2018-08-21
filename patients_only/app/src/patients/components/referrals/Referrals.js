import React from 'react';
import Api from '../../store/Api';
import { withStyles } from '@material-ui/core/styles';
import UINotFound from 'components/ui/UINotFound';
import ReferralList from 'services/referrals/components/ReferralList';
import {observer} from 'mobx-react';

const styles = {
  root: {
    width: '100%',
    maxWidth: 360,
  }
}

class Referrals extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      referrals: null,
      resultsNotFound: true,
      dataFetched: false
    }
  }

  componentDidUpdate() {
    if (this.props.fetch !== false) {
      this.fetchReferrals();
    }
  }

  /**
   * Called if a fetch prop is true
   */

  fetchReferrals = () => {
    let { dataFetched } = this.state;

    if (dataFetched === false) {
      this.callApi();
      this.setState({ dataFetched: true });
    }
  }

  /**
   * Api request to fetch referrals by patientId
   */

  callApi = () => {
    Api.referrals(this.props.patientId).then((response) => {
      let referrals = response;
      if (referrals)
      {
        let resultsNotFound = (!referrals.length) ? true:false;

        this.setState({
          referrals: referrals,
          resultsNotFound: resultsNotFound
        })
      }
    });
  }

  /**
   * Called when a search result name is clicked
   */

  linkReferral = (referralId) => {
    this.props.history.push('/referrals/' + referralId);
  }

  // ----------------------------------

  render() {

    let { classes } = this.props;
    let { referrals, resultsNotFound } = this.state;

    return (
      <div className={classes.root}>

        {resultsNotFound && 
          <UINotFound message="No referrals were found." />}

        {referrals &&
          <ReferralList
            referrals={referrals}
            parentCallback={this.linkReferral} />}
      </div>
    )
  }
}

export default withStyles(styles)(observer(Referrals));