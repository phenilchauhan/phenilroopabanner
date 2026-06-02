import fs from 'fs';
import https from 'https';

https.get('https://phenilchauhan.github.io/phenilroopabanner/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('target_site.html', data);
    console.log('Downloaded HTML');
  });
});
