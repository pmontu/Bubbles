import React from 'react';
import { connect } from 'react-redux'
import { fetchWaterCans } from './actions'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1,
      pageSize: 10
    }
  }

  componentDidMount(){
    this.props.handlePageLoad(this.state.page, this.state.pageSize)
  }

  render() {
    const rows = this.props.waterCans.map(wCan => <tr key={wCan.id}>
        <td>{wCan.delivered_to}</td>
        <td>{wCan.date}</td>
        <td>{wCan.quantity}</td>
        <td>{wCan.cost}</td>
        <td>{wCan.balance}</td>
        <td>{wCan.deliverd_by}</td>
      </tr>)
    return (
      <table>
        <tbody>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Cans</th>
            <th>Cost</th>
            <th>Balance</th>
            <th>Deliverd By</th>
          </tr>
          {rows}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => state
function mapDispatchToProps(dispatch) {
  return {
    handlePageLoad: fetchWaterCans(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
