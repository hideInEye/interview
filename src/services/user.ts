import request from '@/api/index';

export const getCaptchaId = () => {
  return request({
    url: '/web/v1/pub/login/captchaid',
    method: 'GET',
  });
};

export const getCaptcha = (params: string) => {
  return `/web/v1/pub/login/captcha?id=${params}`;
};

export const test = (params?: string) => {
  return request({
    url: '/biz/server/serverTime',
    method: 'POST',
  });
};