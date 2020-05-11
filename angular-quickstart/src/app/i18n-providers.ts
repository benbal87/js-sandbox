import {
  TRANSLATIONS,
  TRANSLATIONS_FORMAT,
  LOCALE_ID
} from '@angular/core';

declare const System: any;

interface TranslationFileContent {
  Translation: string;
}

export function getTranslationProviders(): Promise<Object[]> {
  let locale = null;

  if (localStorage.getItem('localeId') !== null) {
    locale = localStorage.getItem('localeId');
  } else {
    const userLanguage: string = navigator.language;
    const languages = ['fr', 'hu'];
    for (const language of languages) {
      if (userLanguage.indexOf(language) !== -1) {
        localStorage.setItem('localeId', userLanguage);
        locale = localStorage.getItem('localeId');
      }
    }
  }

  const noProviders: Object[] = [];

  switch (locale) {
    case 'fr':
      return System.import('../i18n/messages.fr.ts')
        .then((translations: TranslationFileContent) => {
          return createProviders(translations, locale);
        })
        .catch(() => noProviders);
    case 'hu':
      return System.import('../i18n/messages.hu.ts')
        .then((translations: TranslationFileContent) => {
          return createProviders(translations, locale);
        })
        .catch(() => noProviders);
    default:
      return Promise.resolve(noProviders);
  }
}

function createProviders(translations: TranslationFileContent, locale: string) {
  return [
    {provide: TRANSLATIONS, useValue: translations.Translation},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
    {provide: LOCALE_ID, useValue: locale}
  ];
}
