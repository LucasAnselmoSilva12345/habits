interface LabelHabitFormProps {
  text: string;
  htmlFor?: string;
  marginTop?: number;
}

export function LabelHabitForm({
  text,
  htmlFor,
  marginTop,
}: LabelHabitFormProps) {
  const marginTopStyles = {
    marginTop: `${marginTop}rem`,
  };

  return (
    <label
      htmlFor={htmlFor}
      className="font-semibold leading-tight"
      style={marginTopStyles}
    >
      {text}
    </label>
  );
}
