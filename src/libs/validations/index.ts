import { Rules } from './rules';

class Validator {
  libRules = null;
  rules = {};
  errors = {};

  constructor() {
    this.libRules = new Rules();
  }

  setRules(rules) {
    this.rules = rules;
  }

  run(data) {
    this.errors = {};
    for (const field in data) {
      if (field in this.rules) {
        this.callRules(this.rules[field], data[field], field);
      }
    }
  }

  callRules(rules, data, field) {
    const matchs = rules.split('|');

    matchs.forEach(match => {
      if (typeof this.libRules[match] !== 'function') {
        throw `${match} no es una regla`;
      }

      if (!this.libRules[match](data)) {
        this.errors[field] = {
          ...this.errors[field],
          [match]: this.messages(match)
        };
      }
    });
  }

  messages(key) {
    return this.libRules.messages[key];
  }

  getErrors() {
    return this.errors;
  }
}

export { Validator };
