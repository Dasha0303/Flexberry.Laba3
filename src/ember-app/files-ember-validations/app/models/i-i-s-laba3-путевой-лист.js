import {
  defineNamespace,
  Model as ПутевойЛистMixin
} from '../mixins/regenerated/models/i-i-s-laba3-путевой-лист';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПутевойЛистMixin, {
});

defineNamespace(Model);

export default Model;
