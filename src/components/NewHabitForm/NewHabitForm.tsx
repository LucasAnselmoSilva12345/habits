import { Check } from 'phosphor-react';
import { LabelHabitForm } from '../LabelHabitForm/LabelHabitForm';

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <LabelHabitForm text="Qual seu comprometimento?" htmlFor="titleHabit" />
      <input
        type="text"
        id="titleHabit"
        placeholder="Ex: Exercícios, dormir bem, etec..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
      />
      <LabelHabitForm text="Qual a recorrência?" htmlFor="" marginTop={1} />
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-400"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
