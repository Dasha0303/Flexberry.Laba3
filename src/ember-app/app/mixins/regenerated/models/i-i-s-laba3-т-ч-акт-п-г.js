import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  весТовараКонец: DS.attr('decimal'),
  весТовараНачало: DS.attr('decimal'),
  времявПути: DS.attr('decimal'),
  местоПогрузки: DS.attr('string'),
  местоРазгрузки: DS.attr('string'),
  отклоненияВеса: DS.attr('string'),
  актПогрРазгр: DS.belongsTo('i-i-s-laba3-акт-погр-разгр', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-laba3-товар', { inverse: null, async: false })
});

export let ValidationRules = {
  весТовараКонец: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.весТовараКонец.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  весТовараНачало: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.весТовараНачало.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  времявПути: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.времявПути.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  местоПогрузки: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.местоПогрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  местоРазгрузки: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.местоРазгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отклоненияВеса: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.отклоненияВеса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  актПогрРазгр: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.актПогрРазгр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-акт-п-г.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
