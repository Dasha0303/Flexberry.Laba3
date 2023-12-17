import { Serializer as ТЧПутевойЛSerializer } from
  '../mixins/regenerated/serializers/i-i-s-laba3-т-ч-путевой-л';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧПутевойЛSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
