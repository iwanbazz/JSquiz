function validate(input) {
  regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  return regexp.test(input)
}

// Validate #FFF for example
