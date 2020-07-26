import { devConfig, qaConfig, stagingConfig, prodConfig } from './constant';

export const getConfig = () => {
  if (process.env.REACT_APP_ENV === 'qa') {
    return qaConfig;
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    return stagingConfig;
  }
  if (process.env.REACT_APP_ENV === 'prod') {
    return prodConfig;
  }
  return devConfig;
};
