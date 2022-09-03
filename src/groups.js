export const groupsArr = [
  {
    name: 'A',
    codes: ['QA', 'EC', 'SN', 'NL'],
    teams: ['Qatar', 'Equador', 'Senegal', 'Netherlands'], //we need these to keep the initial order of the teams.
    table: [
      //this array get sorted to match classification within the groups.
      ['Qatar', 'QA', 0, 0, 0, 0], //name, flag code, total points, goals for, goals against, goals difference.
      ['Equador', 'EC', 0, 0, 0, 0],
      ['Senegal', 'SN', 0, 0, 0, 0],
      ['Netherlands', 'NL', 0, 0, 0, 0],
    ],
  },
  {
    name: 'B',
    codes: ['GB-ENG', 'IR', 'US', 'GB-WLS'],
    teams: ['England', 'IR Iran', 'USA', 'Wales'],
    table: [
      ['England', 'GB-ENG', 0, 0, 0, 0],
      ['IR Iran', 'IR', 0, 0, 0, 0],
      ['USA', 'US', 0, 0, 0, 0],
      ['Wales', 'GB-WLS', 0, 0, 0, 0],
    ],
  },
  {
    name: 'C',
    codes: ['AR', 'SA', 'MX', 'PL'],
    teams: ['Argentina', 'Saudi Arabia', 'Mexico', 'Poland'],
    table: [
      ['Argentina', 'AR', 0, 0, 0, 0],
      ['Saudi Arabia', 'SA', 0, 0, 0, 0],
      ['Mexico', 'MX', 0, 0, 0, 0],
      ['Poland', 'PL', 0, 0, 0, 0],
    ],
  },
  {
    name: 'D',
    codes: ['FR', 'AU', 'DK', 'TN'],
    teams: ['France', 'Australia', 'Denmark', 'Tunisia'],
    table: [
      ['France', 'FR', 0, 0, 0, 0],
      ['Australia', 'AU', 0, 0, 0, 0],
      ['Denmark', 'DK', 0, 0, 0, 0],
      ['Tunisia', 'TN', 0, 0, 0, 0],
    ],
  },
  {
    name: 'E',
    codes: ['ES', 'CR', 'DE', 'JP'],
    teams: ['Spain', 'Costa Rica', 'Germany', 'Japan'],
    table: [
      ['Spain', 'ES', 0, 0, 0, 0],
      ['Costa Rica', 'CR', 0, 0, 0, 0],
      ['Germany', 'DE', 0, 0, 0, 0],
      ['Japan', 'JP', 0, 0, 0, 0],
    ],
  },
  {
    name: 'F',
    codes: ['BE', 'CA', 'MA', 'HR'],
    teams: ['Belgium', 'Canada', 'Morocco', 'Croatia'],
    table: [
      ['Belgium', 'BE', 0, 0, 0, 0],
      ['Canada', 'CA', 0, 0, 0, 0],
      ['Morocco', 'MA', 0, 0, 0, 0],
      ['Croatia', 'HR', 0, 0, 0, 0],
    ],
  },
  {
    name: 'G',
    codes: ['BR', 'RS', 'CH', 'CM'],
    teams: ['Brazil', 'Serbia', 'Switzerland', 'Cameroon'],
    table: [
      ['Brazil', 'BR', 0, 0, 0, 0],
      ['Serbia', 'RS', 0, 0, 0, 0],
      ['Switzerland', 'CH', 0, 0, 0, 0],
      ['Cameroon', 'CM', 0, 0, 0, 0],
    ],
  },
  {
    name: 'H',
    codes: ['PT', 'GH', 'UY', 'KR'],
    teams: ['Portugal', 'Ghana', 'Uruguay', 'Korea Rep'],
    table: [
      ['Portugal', 'PT', 0, 0, 0, 0],
      ['Ghana', 'GH', 0, 0, 0, 0],
      ['Uruguay', 'UY', 0, 0, 0, 0],
      ['Korea Rep', 'KR', 0, 0, 0, 0],
    ],
  },
];

export const goalsArr = new Array(8).fill([
  [
    [0, ''],
    [1, ''],
  ],
  [
    [2, ''],
    [3, ''],
  ],
  [
    [0, ''],
    [2, ''],
  ],
  [
    [3, ''],
    [1, ''],
  ],
  [
    [3, ''],
    [0, ''],
  ],
  [
    [1, ''],
    [2, ''],
  ],
]);

export const knockGoalsArr = new Array(16).fill(['', '']);

export const knockArr = new Array(16).fill(['', '']);
