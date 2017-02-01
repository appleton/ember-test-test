import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('testing-testing', 'Integration | Component | testing testing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{testing-testing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#testing-testing}}
      template block text
    {{/testing-testing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it passes', function(assert) {
  assert.ok(true);
});
