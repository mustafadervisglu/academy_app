import { User } from 'src/modules/user/entities/user.entity';
import { JobTitle } from 'src/modules/user/entities/job-title.entity';
import { Branch } from 'src/modules/branch/entities/branch.entity';
import { Role } from 'src/modules/auth/entities/role.entity';
import { SessionToken } from 'src/modules/auth/entities/session-token.entity';
import { ContactInfo } from 'src/modules/user/entities/contact.entity';
import { UserRole } from 'src/modules/user/entities/user-role.entity';

const AppDataSource = {
  name: 'default',
  type: 'mysql',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  database: process.env.MYSQL_DATABASE_NAME || 'test',
  entities: [User, Branch, JobTitle, Role, SessionToken, ContactInfo, UserRole],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  logging: false,
  seeds: ['src/seeds/**/*{.ts,.js}'],
};

export default AppDataSource;
