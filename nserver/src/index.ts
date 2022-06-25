import 'reflect-metadata';
import app from './app';
import { appDataSource } from './data-source';

const main = async () => {

  try {
    // use database
    await appDataSource.initialize();
    console.log('Database enabled');

    // use app
    const port = app.get('port');
    app.listen(port);
    console.log('Listen on port', port);
  } catch (error) {
    console.error(error);
  }
}

main();