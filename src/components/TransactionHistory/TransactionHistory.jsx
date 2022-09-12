import PropTypes from 'prop-types';
import Transaction from "./Transaction"

function TransactionHistory({ items }) {

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }))
}




export default TransactionHistory