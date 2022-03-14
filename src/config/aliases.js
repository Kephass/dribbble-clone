const aliases = (prefix = `src`) => ({
  '@app': `${prefix}/app`,
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@features': `${prefix}/features`,
  '@pages': `${prefix}/pages`,
  '@ui': `${prefix}/components/ui`
});

module.exports = aliases;
