const aliases = (prefix = `src`) => ({
  '@app': `${prefix}/app`,
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@features': `${prefix}/features`,
  '@screens': `${prefix}/screens`,
  '@ui': `${prefix}/components/ui`,
});

module.exports = aliases;
