const colorTheme = {
  green: 'var(--green)',
  violet: 'var(--violet)',
  blue: 'var(--blue)',
  'light-blue': 'var(--light-blue)',
  yellow: 'var(--yellow)',
  black: 'var(--black)',
  grey: 'var(--grey)',
  'light-grey': 'var(--light-grey)',
  'lighter-grey': 'var(--lighter-grey)',
  white: 'var(--white)',
  red: 'var(--red)',
  'global-bg': 'var(--global-bg)',
};

const spacingTheme = Array(31).fill(null)
  .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});

module.exports = {
  colorTheme,
  spacingTheme,
};
