module.exports = {
  name: 'haplo-ft',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/haplo-ft',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
