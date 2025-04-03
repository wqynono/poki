import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh', 'ja', 'ko', 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
export const laguageList =  ['en', 'zh', 'ja', 'ko', 'ru']
