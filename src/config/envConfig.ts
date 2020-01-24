import Config from 'react-native-config';

const getBoolean = value => value === 'true';

export default {
  ENV: Config.ENV,
  ENABLE_LOGGING: getBoolean(Config.ENABLE_LOGGING),
  API_URL: Config.API_URL,
};
