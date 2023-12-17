import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  наимДолжности: DS.attr('string')
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-laba3-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимДолжности: {
    descriptionKey: 'models.i-i-s-laba3-должности.validations.наимДолжности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
