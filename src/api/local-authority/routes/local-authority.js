'use strict';

/**
 * local-authority router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::local-authority.local-authority');
