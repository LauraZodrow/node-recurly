'use strict';

exports.accounts = {
  list: ['/v3/accounts', 'GET'],
  get: ['/v3/accounts/:account_code', 'GET'],
  create: ['/v3/accounts', 'POST'],
  update: ['/v3/accounts/:account_code', 'PUT'],
  close: ['/v3/accounts/:account_code', 'DELETE'],
  reopen: ['/v3/accounts/:account_code/reopen', 'PUT'],
  notes: ['/v3/accounts/:account_code/notes', 'GET']
}

exports.adjustments = {
  list: ['/v3/accounts/:account_code/adjustments', 'GET'],
  get: ['/v3/adjustments/:uuid', 'GET'],
  create: ['/v3/accounts/:account_code/adjustments', 'POST'],
  remove: ['/v3/adjustments/:uuid', 'DELETE']
}

exports.billingInfo = {
  get: ['/v3/accounts/:account_code/billing_info', 'GET'],
  update: ['/v3/accounts/:account_code/billing_info', 'PUT'],
  remove: ['/v3/accounts/:account_code/billing_info', 'DELETE']
};

exports.coupons = {
  list: ['/v3/coupons', 'GET'],
  get: ['/v3/coupons/:coupon_code', 'GET'],
  create: ['/v3/coupons', 'POST'],
  deactivate: ['/v3/coupons/:coupon_code', 'DELETE']
};

exports.couponRedemption = {
  redeem: ['/v3/coupons/:coupon_code/redeem', 'POST'],
  get: ['/v3/accounts/:account_code/redemption', 'GET'],
  getAll: ['/v3/accounts/:account_code/redemptions', 'GET'],
  remove: ['/v3/accounts/:account_code/redemption', 'DELETE'],
  getByInvoice: ['/v3/invoices/:invoice_number/redemption', 'GET']
};

exports.invoices = {
  list: ['/v3/invoices', 'GET'],
  listByAccount: ['/v3/accounts/:account_code/invoices', 'GET'],
  get: ['/v3/invoices/:invoice_number', 'GET'],
  create: ['/v3/accounts/:account_code/invoices', 'POST'],
  preview: ['/v3/accounts/:account_code/invoices/preview', 'POST'],
  refundLineItems: ['/v3/invoices/:invoice_number/refund', 'POST'],
  refundOpenAmount: ['/v3/invoices/:invoice_number/refund', 'POST'],
  markSuccessful: ['/v3/invoices/:invoice_number/mark_successful', 'PUT'],
  markFailed: ['/v3/invoices/:invoice_number/mark_failed', 'PUT'],
  enterOfflinePayment: ['/v3/invoices/:invoice_number/transactions', 'POST'],
  retrievePdf: ['/v3/invoices/:invoice_number', 'GET', {'Accept': 'application/pdf'}]
}

exports.plans = {
  list: ['/v3/plans', 'GET'],
  get: ['/v3/plans/:plan_code', 'GET'],
  create: ['/v3/plans', 'POST'],
  update: ['/v3/plans/:plan_code', 'PUT'],
  remove: ['/v3/plans/:plan_code', 'DELETE']
};

exports.planAddons = {
  list: ['/v3/plans/:plan_code/add_ons', 'GET'],
  get: ['/v3/plans/:plan_code/add_ons/:addon_code', 'GET'],
  create: ['/v3/plans/:plan_code/add_ons', 'POST'],
  update: ['/v3/plans/:plan_code/add_ons/:add_on_code', 'PUT'],
  remove: ['/v3/plans/:plan_code/add_ons/:add_on_code', 'DELETE']
};

exports.subscriptions = {
  list: ['/v3/subscriptions', 'GET'],
  listByAccount: ['/v3/accounts/:account_code/subscriptions', 'GET'],
  get: ['/v3/subscriptions/:uuid', 'GET'],
  create: ['/v3/subscriptions', 'POST'],
  preview: ['/v3/subscriptions/preview', 'POST'],
  update: ['/v3/subscriptions/:uuid', 'PUT'],
  updateNotes: ['/v3/subscriptions/:uuid/notes', 'PUT'],
  updatePreview: ['/v3/subscriptions/:uuid/preview', 'POST'],
  cancel: ['/v3/subscriptions/:uuid/cancel', 'PUT'],
  reactivate: ['/v3/subscriptions/:uuid/reactivate', 'PUT'],
  terminate: ['/v3/subscriptions/:uuid/terminate?refund=:refund_type', 'PUT'],
  postpone: ['/v3/subscriptions/:uuid/postpone?next_renewal_date=:next_renewal_date', 'PUT'],
  addon: ['/v3/subscriptions/:subscription_uuid/add_ons/:add_on_code/usage/:usage_id', 'PUT']
}


exports.usageRecords = {
  list: ['/v3/subscriptions/:subscription_uuid/add_ons/:add_on_code/usage', 'GET'],
  lookup: ['/v3/subscriptions/:subscription_uuid/add_ons/:add_on_code/usage/:usage_id', 'GET'],
  log: ['/v3/subscriptions/:subscription_uuid/add_ons/:add_on_code/usage', 'POST'],
  update: ['/v3/subscriptions/:subscription_uuid/add_ons/:add_on_code/usage/:usage_id', 'PUT'],
  delete: ['/v3/subscriptions/:subscription_uuid/add_ons/:add_on_code/usage/:usage_id', 'DELETE']
}

exports.transactions = {
  list: ['/v3/transactions', 'GET'],
  listByAccount: ['/v3/accounts/:account_code/transactions', 'GET'],
  get: ['/v3/transactions/:id', 'GET'],
  create: ['/v3/transactions', 'POST'],
  refund: ['/v3/transactions/:id', 'DELETE']
}
