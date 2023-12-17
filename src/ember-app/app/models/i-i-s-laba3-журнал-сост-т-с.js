import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ЖурналСостТСMixin
} from '../mixins/regenerated/models/i-i-s-laba3-журнал-сост-т-с';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЖурналСостТСMixin, Validations, {
});

export default Model;
