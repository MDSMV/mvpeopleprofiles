'use strict';

/**
 * Prating.js controller
 *
 * @description: A set of functions called "actions" for managing `Prating`.
 */

module.exports = {

  /**
   * Retrieve prating records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.prating.search(ctx.query);
    } else {
      return strapi.services.prating.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a prating record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.prating.fetch(ctx.params);
  },

  /**
   * Count prating records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.prating.count(ctx.query);
  },

  /**
   * Create a/an prating record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.prating.add(ctx.request.body);
  },

  /**
   * Update a/an prating record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.prating.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an prating record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.prating.remove(ctx.params);
  }
};
