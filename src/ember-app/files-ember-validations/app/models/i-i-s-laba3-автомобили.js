import {
  defineNamespace,
  Model as АвтомобилиMixin
} from '../mixins/regenerated/models/i-i-s-laba3-автомобили';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АвтомобилиMixin, {
});

defineNamespace(Model);

export default Model;
