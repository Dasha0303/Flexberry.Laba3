import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDАвто: DS.attr('number'),
  госНомерАвто: DS.attr('string'),
  марка: DS.attr('string')
});

export let ValidationRules = {
  iDАвто: {
    descriptionKey: 'models.i-i-s-laba3-автомобили.validations.iDАвто.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  госНомерАвто: {
    descriptionKey: 'models.i-i-s-laba3-автомобили.validations.госНомерАвто.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-laba3-автомобили.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
