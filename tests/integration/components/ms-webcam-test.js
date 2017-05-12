import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ms-webcam', 'Integration | Component | ms webcam', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ms-webcam}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ms-webcam}}
      template block text
    {{/ms-webcam}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
