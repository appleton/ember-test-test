/* jshint node:true */
module.exports = {
  'framework': 'qunit',
  'test_page': 'tests/index.html?hidepassed',
  'disable_watching': true,
  'launch_in_ci': [
    'Chrome Canary'
  ],
  'launch_in_dev': [
    'Chrome'
  ]
}
