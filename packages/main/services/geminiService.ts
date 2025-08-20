/**
 * NOTE: The Gemini API call has been temporarily disabled to resolve environment variable conflicts.
 * This function now returns a placeholder string to allow the rest of the application to function.
 */
export const generateContent = async (prompt: string): Promise<string> => {
  console.warn("Gemini service is temporarily disabled. Prompt was:", prompt);
  return "AI content generation is temporarily disabled.";
};
