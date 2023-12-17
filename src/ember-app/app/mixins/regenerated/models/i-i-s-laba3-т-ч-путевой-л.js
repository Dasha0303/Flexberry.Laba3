import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  местоНазнач: DS.attr('string'),
  местоОтпр: DS.attr('string'),
  пРойденоКМ: DS.attr('number'),
  путевойЛист: DS.belongsTo('i-i-s-laba3-путевой-лист', { inverse: null, async: false })
});

export let ValidationRules = {
  местоНазнач: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-путевой-л.validations.местоНазнач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  местоОтпр: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-путевой-л.validations.местоОтпр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пРойденоКМ: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-путевой-л.validations.пРойденоКМ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  путевойЛист: {
    descriptionKey: 'models.i-i-s-laba3-т-ч-путевой-л.validations.путевойЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
