import { JoiD } from '../helper/joi';

// Defining Authentication Rules: Validation rules are defined for each environment variable.
export const configValidationSchema = JoiD.object({
  MYSQL_HOST: JoiD.string().required(),
  MYSQL_PORT: JoiD.number().default(3306).required(),
  MYSQL_USER: JoiD.string().required(),
  MYSQL_PASSWORD: JoiD.string().required(),
  MYSQL_DATABASE_NAME: JoiD.string().required(),
  GRAYLOG_HOST: JoiD.string().required(),
  GRAYLOG_PORT: JoiD.number().default(12201).required(),
  GRAYLOG_HOSTNAME: JoiD.string().required(),
});
