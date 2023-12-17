import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТЧАктПГMixin
} from '../mixins/regenerated/models/i-i-s-laba3-т-ч-акт-п-г';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧАктПГMixin, Validations, {
});

export default Model;
