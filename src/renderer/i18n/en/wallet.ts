import { WalletMessages } from '../types'

const wallet: WalletMessages = {
  'wallet.main.title': 'Main',
  'wallet.nav.deposits': 'Deposits',
  'wallet.nav.bonds': 'Bonds',
  'wallet.nav.poolshares': 'Shares',
  'wallet.column.name': 'Name',
  'wallet.column.ticker': 'Ticker',
  'wallet.action.send': 'Send',
  'wallet.action.upgrade': 'upgrade',
  'wallet.action.receive': 'Receive {asset}',
  'wallet.action.forget': 'Forget',
  'wallet.action.unlock': 'Unlock',
  'wallet.action.connect': 'Connect',
  'wallet.action.import': 'Import',
  'wallet.action.create': 'Create',
  'wallet.action.deposit': 'Deposit',
  'wallet.balance.total': 'Total balance',
  'wallet.shares.total': 'Total value',
  'wallet.connect.instruction': 'Please connect your wallet',
  'wallet.lock.label': 'Lock wallet',
  'wallet.unlock.label': 'Unlock wallet',
  'wallet.unlock.title': 'Unlock your wallet',
  'wallet.unlock.instruction': 'Please unlock your wallet',
  'wallet.unlock.password': 'Enter your password',
  'wallet.unlock.error': 'Could not unlock the wallet. Please check you password and try it again',
  'wallet.imports.label': 'Import wallet',
  'wallet.imports.keystore.select': 'Select keystore file',
  'wallet.imports.keystore.title': 'Please choose the keystore file of your wallet',
  'wallet.imports.phrase.title': 'Please enter the phrase of your wallet with a single space between the words',
  'wallet.imports.wallet': 'Import existing wallet',
  'wallet.imports.enterphrase': 'Enter phrase',
  'wallet.imports.error.instance': 'Could not create an instance of Client',
  'wallet.imports.error.keystore.load': 'Invalid Keystore',
  'wallet.imports.error.keystore.import': 'Invalid Password',
  'wallet.phrase.error.valueRequired': 'Value for phrase is required',
  'wallet.phrase.error.invalid': 'Invalid phrase',
  'wallet.phrase.error.import': 'Error while importing phrase',
  'wallet.txs.history': 'Transaction history',
  'wallet.empty.phrase.import': 'Import an existing wallet with funds on it',
  'wallet.empty.phrase.create': 'Create a new wallet, add funds to it',
  'wallet.create.copy.phrase': 'Copy phrase',
  'wallet.create.title': 'Create new wallet',
  'wallet.create.enter.phrase': 'Enter phrase correctly',
  'wallet.create.error.phrase': 'Save your phrase at a safety place and enter it in a correct way',
  'wallet.create.words.click': 'Click the word in correct order',
  'wallet.create.creating': 'Creating wallet',
  'wallet.create.error': 'Error while saving a phrase',
  'wallet.receive.address.error': 'No address available to receive funds',
  'wallet.receive.address.errorQR': 'Error while rendering QR code: {error}',
  'wallet.remove.label': 'Forget wallet',
  'wallet.remove.label.title': 'Are you sure you want to forget your wallet?',
  'wallet.remove.label.description':
    'You will need to provide your phrase to re-create your wallet. Please ensure you have your phrase saved at a safe place before you proceed.',
  'wallet.send.success': 'Transaction succeeded.',
  'wallet.send.fastest': 'Fastest',
  'wallet.send.fast': 'Fast',
  'wallet.send.average': 'Average',
  'wallet.send.max.doge':
    'Calculated max. value based on estimated fees, which might be incorrect for DOGE from time to time. In case of an "Balance Insufficient for transaction" error message check https://blockchair.com/dogecoin/transactions to get an average of latest fees and try to deduct it from your balance before sending a transaction.',
  'wallet.errors.balancesFailed': 'Loading balances failed. {errorMsg}',
  'wallet.errors.asset.notExist': 'No {asset} asset',
  'wallet.errors.address.empty': "Address can't be empty",
  'wallet.errors.address.invalid': 'Address is invalid',
  'wallet.errors.address.couldNotFind': 'Could not find {pool} pool address',
  'wallet.errors.amount.shouldBeNumber': 'Amount should be a number',
  'wallet.errors.amount.shouldBeGreaterThan': 'Amount should be greater than {amount}',
  'wallet.errors.amount.shouldBeGreaterOrEqualThan': 'Amount should be equal or greater than {amount}',
  'wallet.errors.amount.shouldBeLessThanBalance': 'Amount should be less than your balance',
  'wallet.errors.amount.shouldBeLessThanBalanceAndFee': 'Amount should be less than your balance minus fee',
  'wallet.errors.fee.notCovered': 'Fees are not covered by your balance ({balance})',
  'wallet.errors.invalidChain': 'Invalid chain: {chain}',
  'wallet.password.confirmation.title': 'Wallet password confirmation',
  'wallet.password.confirmation.description': 'Please enter your wallet password.',
  'wallet.password.confirmation.pending': 'Validating password',
  'wallet.password.confirmation.error': 'Password is wrong',
  'wallet.password.repeat': 'Repeat password',
  'wallet.password.mismatch': 'Password mismatch',
  'wallet.ledger.confirm': 'Click "next" to sign the transaction on your device.',
  'wallet.send.error': 'Send error',
  'wallet.upgrade.pending': 'Upgrading',
  'wallet.upgrade.success': 'Successful upgrade',
  'wallet.upgrade.error': 'Upgrade error',
  'wallet.upgrade.error.data': 'Invalid data for asset {asset}',
  'wallet.upgrade.error.loadPoolAddress': '{pool} pool address could not be loaded',
  'wallet.upgrade.feeError': 'Upgrade fee {fee} is not covered by your balance {balance}',
  'wallet.validations.lessThen': 'Should be less then {value}',
  'wallet.validations.graterThen': 'Should be grater then {value}',
  'wallet.validations.shouldNotBeEmpty': 'Should not be empty',
  'wallet.ledger.verifyAddress.modal.title': 'Verify Ledger Address',
  'wallet.ledger.verifyAddress.modal.description': 'Verify address {address} on your device'
}

export default wallet
