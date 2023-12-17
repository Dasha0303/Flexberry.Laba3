import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-laba3-сотрудники', 'Unit | Serializer | i-i-s-laba3-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-laba3-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-laba3-тип-акта',

    'model:i-i-s-laba3-автомобили',
    'model:i-i-s-laba3-акт-погр-разгр',
    'model:i-i-s-laba3-должности',
    'model:i-i-s-laba3-журнал-сост-т-с',
    'model:i-i-s-laba3-путевой-лист',
    'model:i-i-s-laba3-сотрудники',
    'model:i-i-s-laba3-т-ч-акт-п-г',
    'model:i-i-s-laba3-т-ч-путевой-л',
    'model:i-i-s-laba3-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
