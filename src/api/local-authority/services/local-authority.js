'use strict';

/**
 * local-authority service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-authority.local-authority');
