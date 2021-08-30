const content = 'Some content!'
const fs = require('fs');
const fetch = fs.writeFile('/Users/sowjanyamaisagoni/lighthouse/w02/page-fetcher/fetcher.js', content, err => {
  if (err) {
    console.error(err)
    return
  }
  
  else {
    console.log('error');
    return
  }
  
});
fetch;