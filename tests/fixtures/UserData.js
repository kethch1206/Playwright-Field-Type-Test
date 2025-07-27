/**
 * Test Data Fixtures
 * Centralized test data management
 */

const testUsers = {
  validUser1: {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "0912345678",
    address: "123 Main Street, City, Country",
    gender: "male",
    country: "japan",
    days: ["monday", "wednesday", "friday"],
  },

  validUser2: {
    name: "Jane Wilson",
    email: "jane.wilson@test.com",
    phone: "0987654321",
    address: "456 Oak Avenue, Downtown",
    gender: "female",
    country: "canada",
    days: ["tuesday", "thursday"],
  },

  validUser3: {
    name: "David Chen",
    email: "david.chen@demo.com",
    phone: "0955555555",
    address: "789 Pine Road, Suburb",
    gender: "male",
    country: "australia",
    days: ["saturday", "sunday"],
  },
};

const invalidEmails = [
  "invalid",
  "test@",
  "@test.com",
  "test..test@example.com",
  "test@.com",
  "test@com",
  "test space@example.com",
];

const countries = {
  "United States": "usa",
  Japan: "japan",
  Canada: "canada",
  Australia: "australia",
  "United Kingdom": "uk",
  Germany: "germany",
  France: "france",
  India: "india",
};

const testPhoneNumbers = {
  valid: ["0912345678", "0987654321", "0911111111", "0922222222"],
  invalid: [
    "123",
    "abc123",
    "091234567890123", // too long
    "091-234-5678", // with dashes
    "+886912345678", // with country code
  ],
};

const specialCharacters = {
  common: "!@#$%^&*()",
  unicode: "你好世界",
  symbols: "™®©",
  mixed: "Test123!@#你好",
};

const longText = {
  short: "Short text",
  medium:
    "This is a medium length text that might be used for testing purposes.",
  long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  veryLong: "a".repeat(1000),
};

module.exports = {
  testUsers,
  invalidEmails,
  countries,
  testPhoneNumbers,
  specialCharacters,
  longText,
};
