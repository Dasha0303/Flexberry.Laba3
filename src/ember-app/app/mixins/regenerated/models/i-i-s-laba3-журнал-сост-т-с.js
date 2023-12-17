import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  внешСостТС: DS.attr('string'),
  время: DS.attr('number'),
  дата: DS.attr('date'),
  показОдометра: DS.attr('number'),
  автомобили: DS.belongsTo('i-i-s-laba3-автомобили', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-laba3-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  внешСостТС: {
    descriptionKey: 'models.i-i-s-laba3-журнал-сост-т-с.validations.внешСостТС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-laba3-журнал-сост-т-с.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-laba3-журнал-сост-т-с.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  показОдометра: {
    descriptionKey: 'models.i-i-s-laba3-журнал-сост-т-с.validations.показОдометра.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  автомобили: {
    descriptionKey: 'models.i-i-s-laba3-журнал-сост-т-с.validations.автомобили.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-laba3-журнал-сост-т-с.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
