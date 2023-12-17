import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDТовара: DS.attr('number'),
  наимТовара: DS.attr('string')
});

export let ValidationRules = {
  iDТовара: {
    descriptionKey: 'models.i-i-s-laba3-товар.validations.iDТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимТовара: {
    descriptionKey: 'models.i-i-s-laba3-товар.validations.наимТовара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
