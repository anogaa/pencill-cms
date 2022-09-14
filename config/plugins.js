module.exports = ({ env }) => ({
  // ..
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
          bucketName: 'pencill-strapi-cms',
          publicFiles: false,
          uniform: false,
          basePath: '',
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  // ..
  'import-export-entries': {
    enabled: true,
  },
});
