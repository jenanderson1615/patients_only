import React from 'react';
import { observer } from 'mobx-react';
import OrdersPageToolbar from 'services/orders/components/OrdersPageToolbar';
import OrderFormDialog from 'services/orders/components/OrderFormDialog';

class OrdersPage extends React.Component {

  constructor(props) {
    super(props);
    this.pageTitle = 'Orders';
    this.patientId = props.match.params.patientId;
    this.state = {
      showOrderDialog: false
    }
  }

  componentWillMount() {
    this.props.appStore.setTitle(this.pageTitle);
  }

  componentDidUpdate() {
    this.props.appStore.setTitle(this.pageTitle,this.patientTitle);
  }

  toggleOrderDialog = () => {
    this.setState({
      showOrderDialog: !this.state.showOrderDialog
    })
  }

  // ---------------------------------------

  render() {
    let { showOrderDialog } = this.state;

    return (
      <React.Fragment>

      {/* Create order dialog */}
      <OrderFormDialog
        open={showOrderDialog}
        title="Create Order"
        parentCallBack={this.toggleOrderDialog} />

      {/* Toolbar */}
      <OrdersPageToolbar
        title="Orders"
        onSearchSubmit={this.onSearchSubmit}
        handleOnClear={this.onSearchClear}
        parentToggleFilters={this.toggleFilters} />


      </React.Fragment>
    );
  }
}

export default observer(OrdersPage);
