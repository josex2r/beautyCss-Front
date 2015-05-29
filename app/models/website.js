import DS from 'ember-data';

var Website = DS.Model.extend({
  token: DS.attr('string'),
  css: DS.hasMany('css')
});

Website.reopenClass({
  FIXTURES: [

  ]
});

export default Website;
