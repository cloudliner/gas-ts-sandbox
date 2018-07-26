const a = 1;

function hello() {
  const name = 'Steve';
  // console.log(`Hello, ${name}`);
  Logger.log(`Hello, ${name}, ${a}, ${b}, ${c}`);
  test();
}

const newTest = () => {
  Logger.log(`newTest ${a}, ${b}, ${c}`);
  const email = Session.getActiveUser().getEmail();
  const body = `Test, ${a}, ${b}, ${c}`;
  MailApp.sendEmail(email, 'GAS-Log: Test', body,
  { htmlBody: body, noReply: true });
}

const b = 2;
