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
