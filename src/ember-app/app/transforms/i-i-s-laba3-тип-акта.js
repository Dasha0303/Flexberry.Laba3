import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипАктаEnum from '../enums/i-i-s-laba3-тип-акта';

export default FlexberryEnum.extend({
  enum: ТипАктаEnum,
  sourceType: 'IIS.Laba3.ТипАкта'
});
