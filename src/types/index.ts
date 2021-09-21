export interface FormattedNumber {
  raw: number;
  formatted: string;
}

export interface DataStructure {
  date: string;
  net: FormattedNumber;
  taxes: FormattedNumber;
  gross: FormattedNumber;
  monthlyGross: FormattedNumber;
  monthlyNet: FormattedNumber;
}

export interface IncomeCalculatorFormProps {
  startingSalary: number;
  growthRate: number;
  years: number;
}

export interface JobProps {
  company: string;
  description: string[];
  title: string;
  startDate: string;
  endDate?: string;
  technologies?: string[];
}
