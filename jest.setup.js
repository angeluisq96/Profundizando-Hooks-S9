import 'whatwg-fetch';
import 'setimmediate';
import { environments } from './src/helpers';

require('dotenv').config({
  path: '.env.test'
})

jest.mock('./src/helpers/environments', () => ( {
  environments: () => ({ ...process.env.NODE_ENV })
} ) ) ;