module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4522cd7bcb04f96e74f879ea3b732cd5'),
  },
});
