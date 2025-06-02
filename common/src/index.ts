import z from "zod";

// Signup
export const signupInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});
export type SignupType = z.infer<typeof signupInput>;

// Signin
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type SigninType = z.infer<typeof signinInput>;

// Resume
export const resumeInput = z.object({
  title: z.string(),
});
export type ResumeType = z.infer<typeof resumeInput>;

// Personal Detail
export const personalDetailInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  jobTitle: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string().email(),
});
export type PersonalDetailType = z.infer<typeof personalDetailInput>;

// Summary
export const summaryInput = z.object({
  summary: z.string(),
});
export type SummaryType = z.infer<typeof summaryInput>;

// Experience
export const experienceInput = z.object({
  postitonTitle: z.string(),
  companyName: z.string(),
  city: z.string(),
  state: z.string(),
  startDate: z.date(), // or z.date() if you're using real Date objects
  endDate: z.date(),
  summary: z.string(),
});
export type ExperienceType = z.infer<typeof experienceInput>;

// Education
export const educationInput = z.object({
  universityName: z.string(),
  degree: z.string(),
  major: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  summary: z.string(),
});
export type EducationType = z.infer<typeof educationInput>;

// Skill
export const skillInput = z.object({
  name: z.string(),
});
export type SkillType = z.infer<typeof skillInput>;
