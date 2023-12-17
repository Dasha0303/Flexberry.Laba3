import {
  defineNamespace,
  Model as ТоварMixin
} from '../mixins/regenerated/models/i-i-s-laba3-товар';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТоварMixin, {
});

defineNamespace(Model);

export default Model;
