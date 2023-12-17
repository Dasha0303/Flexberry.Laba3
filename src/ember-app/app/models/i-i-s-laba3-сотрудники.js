import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-laba3-сотрудники';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотрудникиMixin, Validations, {
});

export default Model;
