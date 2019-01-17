const c = 3;

function test() {
  // console.log('Test');
  // Logger.log(`Test: ${a}, ${b}, ${c}`);
  // newTest();
  var threads = GmailApp.search('Test', 0, 10);
  threads.forEach(function(thread) {
    var messageSubject = thread.getFirstMessageSubject();
    Logger.log(messageSubject);
  });
}
