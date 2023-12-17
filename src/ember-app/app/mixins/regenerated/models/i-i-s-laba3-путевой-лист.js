import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  дата: DS.attr('string'),
  автомобили: DS.belongsTo('i-i-s-laba3-автомобили', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-laba3-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-laba3-путевой-лист.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  автомобили: {
    descriptionKey: 'models.i-i-s-laba3-путевой-лист.validations.автомобили.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-laba3-путевой-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
