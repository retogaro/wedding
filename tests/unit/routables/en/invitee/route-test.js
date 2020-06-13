import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/invitee', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:en/invitee');
    assert.ok(route);
  });
});
