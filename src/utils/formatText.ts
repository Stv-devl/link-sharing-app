'use client';

/**
 * Formats a given text by removing all whitespace characters and converting it to lowercase.
 * @param {string} name - The text to format.
 * @returns {string} The formatted text with no spaces and in lowercase.
 */

export const formatText = (name: string): string => {
  return name.replace(/\s+/g, '').toLowerCase();
};
