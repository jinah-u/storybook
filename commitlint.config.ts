import { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  //단일 커밋 메시지도 검사
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)(?:\((.*)\))?:?\s*(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
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
    'type-empty': [0],
    'subject-empty': [0],
    'body-max-length': [0],
    'footer-max-length': [0],
  },
};

export default Configuration;

module.exports = Configuration;
