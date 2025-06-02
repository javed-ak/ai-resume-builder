import { createContext } from "react";
import type { ResumeContextType, } from "../data/DummyData";

export const ResumeInfoContext = createContext<ResumeContextType | null>(null)