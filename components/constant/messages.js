const messages = {
  success: "Successfully added!",
  updated: "Successfully updated!",
  deleted: "Successfully deleted!",
  loading: "Loading...",
  error: "Error occurred, please try again.",
  serverError: "Internal Server Error",
  paymentSuccess: "Your payment is successful.",
  paymentCancelled: "Payment is cancelled, please try again",
  premiumUpgrade: "Upgrade for access to premium features.",
  request: {
    failed: "Failed to get the data",
    invalid: "Invalid request",
  },
  token: {
    invalid: "Invalid or expired token, Please try again.",
    expired: "Token expired!",
  },
  account: {
    doesntexist: "No such account, Register instead.",
    exist: "This account already exists, Login instead.",
    unauthorized: "Unauthorized request",
  },
  export: "Export will begin shortly.",
};

export const emails = {
  email: "divineekoh@gmail.com",
  feedback: {
    subject: "🎉 New Feedback Received",
    sent: "Feedback received.",
    failed: "Failed to send, please try again.",
  },
  helpCenter: {
    premiumUserSubject: "Need Premium Support 🆘",
    userSubject: "Need Support 🆘",
    sent: "Support is coming your way.",
    failed: "Failed to send, please try again.",
  },
  account: {
    deleted: "Your Trackify account is Deleted!",
  },
  welcome: {
    subject: "✨ Welcome to Trackify",
  },
  invoice: {
    success: "Trackify Premium Payment Successful",
    failed: "Trackify Premium Payment Failed",
  },
  usageLimit: {
    premiumExpired: {
      subject: "Your Premium Plan Expired!",
      message: "Your premium plan limit is reached, renew again to continue.",
    },
    premium: {
      subject: "Your Premium Plan usage exceeded!",
      message: "Your premium plan limit is reached, renew to continue.",
    },
    basic: {
      subject: "Your Basic Plan usage exceeded!",
      message: "Your basic plan limit is reached, upgrade to premium plan.",
    },
  },
  sent: "We just sent an email with magic link, check your inbox.",
  from: "divine from Trackify, <divineekoh@gmail.com>",
  login: { subject: "Login link for Trackify" },
  register: { subject: "Register link for Trackify" },
};

export default messages;
