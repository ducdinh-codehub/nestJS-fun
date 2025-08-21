import { Connection } from 'mongoose';
import { AuthSchema } from 'src/schemas/schemas.auth';

export const authProviders = [
  {
    provide: 'AUTH_MODEL',
    useFactory: (connection: Connection) => connection.model('Auth', AuthSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];