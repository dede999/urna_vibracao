export default class Validation {
  static isValidEmail(email: string) {
    return email.search(/\w+@\w+\.\w+/gi) >= 0;
  }

  static isNotEmpty(field: string) {
    return field !== "";
  }
}
