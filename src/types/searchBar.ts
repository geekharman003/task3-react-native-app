export interface SearchBarProps {
  text: string;
  filterEmployees: (text: string) => void;
}
