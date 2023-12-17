import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as АктПогрРазгрMixin
} from '../mixins/regenerated/models/i-i-s-laba3-акт-погр-разгр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АктПогрРазгрMixin, Validations, {
});

export default Model;
