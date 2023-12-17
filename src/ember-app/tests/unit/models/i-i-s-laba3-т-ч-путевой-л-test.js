import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-laba3-т-ч-путевой-л', 'Unit | Model | i-i-s-laba3-т-ч-путевой-л', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
