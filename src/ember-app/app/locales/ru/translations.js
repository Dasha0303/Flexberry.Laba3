import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
