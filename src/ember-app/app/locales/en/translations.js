import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISLaba3АвтомобилиModel from './models/i-i-s-laba3-автомобили';
import IISLaba3АктПогрРазгрModel from './models/i-i-s-laba3-акт-погр-разгр';
import IISLaba3ДолжностиModel from './models/i-i-s-laba3-должности';
import IISLaba3ЖурналСостТСModel from './models/i-i-s-laba3-журнал-сост-т-с';
import IISLaba3ПутевойЛистModel from './models/i-i-s-laba3-путевой-лист';
import IISLaba3СотрудникиModel from './models/i-i-s-laba3-сотрудники';
import IISLaba3ТЧАктПГModel from './models/i-i-s-laba3-т-ч-акт-п-г';
import IISLaba3ТЧПутевойЛModel from './models/i-i-s-laba3-т-ч-путевой-л';
import IISLaba3ТоварModel from './models/i-i-s-laba3-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-laba3-автомобили': IISLaba3АвтомобилиModel,
    'i-i-s-laba3-акт-погр-разгр': IISLaba3АктПогрРазгрModel,
    'i-i-s-laba3-должности': IISLaba3ДолжностиModel,
    'i-i-s-laba3-журнал-сост-т-с': IISLaba3ЖурналСостТСModel,
    'i-i-s-laba3-путевой-лист': IISLaba3ПутевойЛистModel,
    'i-i-s-laba3-сотрудники': IISLaba3СотрудникиModel,
    'i-i-s-laba3-т-ч-акт-п-г': IISLaba3ТЧАктПГModel,
    'i-i-s-laba3-т-ч-путевой-л': IISLaba3ТЧПутевойЛModel,
    'i-i-s-laba3-товар': IISLaba3ТоварModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;
