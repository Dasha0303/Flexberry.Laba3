import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as АвтомобилиMixin
} from '../mixins/regenerated/models/i-i-s-laba3-автомобили';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АвтомобилиMixin, Validations, {
});

export default Model;
