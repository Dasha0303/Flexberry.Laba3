import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  тип: DS.attr('i-i-s-laba3-тип-акта'),
  сотрудники: DS.belongsTo('i-i-s-laba3-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-laba3-акт-погр-разгр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-laba3-акт-погр-разгр.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-laba3-акт-погр-разгр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
