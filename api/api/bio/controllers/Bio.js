'use strict';

/**
 * Bio.js controller
 *
 * @description: A set of functions called "actions" for managing `Bio`.
 */

module.exports = {

  /**
   * Retrieve bio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.bio.search(ctx.query);
    } else {
      return strapi.services.bio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a bio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.bio.fetch(ctx.params);
  },

  /**
   * Count bio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bio.count(ctx.query);
  },

  /**
   * Create a/an bio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bio.add(ctx.request.body);
  },

  /**
   * Update a/an bio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bio.remove(ctx.params);
  }
};
