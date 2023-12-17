import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ТЧПутевойЛMixin
} from '../mixins/regenerated/models/i-i-s-laba3-т-ч-путевой-л';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧПутевойЛMixin, Validations, {
});

export default Model;
