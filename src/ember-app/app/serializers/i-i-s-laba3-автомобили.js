import { Serializer as АвтомобилиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-laba3-автомобили';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АвтомобилиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
