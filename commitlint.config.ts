import { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'perf',
        'refactor',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'deploy',
        'merge',
      ],
    ],
    'type-case': [2, 'always', 'kebab-case'],
    'body-max-length': [0],
    'footer-max-length': [0],
  },
};

export default Configuration;

module.exports = Configuration;
