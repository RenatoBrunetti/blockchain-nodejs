import moment from 'moment';
import { app, environment } from '@/main/config';

moment.locale('pt-br');

app.listen(environment.port, () => {
  console.log('\n=- - - - - - - - - - - - - - - - - - - -=');
  console.log('🔅', 'BlockchainProject', '🔅');
  console.log('=- - - - - - - - - - - - - - - - - - - -=');
  console.log('🔸', 'Environment:', [environment.capitalizedName]);
  console.log('🔸', 'Server:', [`https://localhost:${environment.port}`]);
  console.log('🔸', 'Started:', [new Date()]);
  console.log('=- - - - - - - - - - - - - - - - - - - -=');
});
