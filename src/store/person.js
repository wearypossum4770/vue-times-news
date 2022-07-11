import { defineStore } from "pinia";

const getters = {
  moverName: ({ mover }) =>
    `${mover.get("firstName") ?? ""}, ${mover.get("middleName") ?? ""}, ${
      mover.get("lastName") ?? ""
    }`,
  moverEmail: ({ mover }) => mover.get("email"),
  moverPhone: ({ mover }) =>
    `${mover.get("homePhone") ?? ""}, ${mover.get("mobilePhone") ?? ""}`,
  preparerName: ({ preparer }) =>
    `${preparer.get("firstName") ?? ""}, ${preparer.get("middleName") ?? ""}, ${
      preparer.get("lastName") ?? ""
    }`,
  preparerEmail: ({ preparer }) => preparer.get("email"),
  preparerPhone: ({ preparer }) =>
    `${preparer.get("homePhone") ?? ""}, ${preparer.get("mobilePhone") ?? ""}`,
};
const actions = {
  /**
   * Determines if mover type is business, set null value to selected prameters
   * @returns {void} no return value for this method.
   */
  async normalizePerson({ moverType }) {
    if (moverType === "BUSINESS") {
      ["firstName", "middleName", "lastName", "suffix"].forEach((value) =>
        this.mover.set(value, null)
      );
    }
  },

  /**
   * This method calls the update functions for mover and preparer
   * @async
   * @param {object} MOVER
   * @param {object} PREPARER
   * @returns {void} no return value for this method.
   */
  async parsePersonRequest({ MOVER, PREPARER }) {
    this.updateMover(MOVER);
    this.updatePreparer(PREPARER);
  },
  /**
   * Update Mover object properties if it has value
   * @async
   * @param {object} mover
   * @returns {void} no return value for this method.
   */
  async updateMover(mover) {
    if (mover) {
      Object.entries(mover).forEach((value, key) => this.mover.set(key, value));
    }
  },
  /**
   * Update Preparer object properties if it has value
   * @async
   * @param {object} preparer
   * @returns {void} no return value for this method.
   */
  async updatePreparer(preparer) {
    if (preparer) {
      Object.entries(preparer).forEach((value, key) =>
        this.preparer.set(key, value)
      );
    }
  },

  /**
   * Saves Preparer object properties if it has value
   * @async
   * @returns {Promise<object>} checks if preparer has value return saved preparer object else null.
   */
  async savePreparer() {
    return Object.fromEntries(this.preparer.entries());
  },
};

/**
 * @namespace
 * @function state (handles holds initial store state.)
 * @property {object} state
 * @property {object} state.mover - Used to identify the person type is mover.
 * @property {object} state.preparer - Used to identify the person type is preparer.
 */
const state = () => ({
  mover: new Map(),
  preparer: new Map(),
});

/**
 * @type {store<StoreGeneric>} piñia store.
 */
export default defineStore("person", {
  getters,
  actions,
  state,
});

export {
  actions as personActions,
  getters as personGetters,
  state as personState,
};
