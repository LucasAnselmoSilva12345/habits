import { FormEvent, useState } from 'react';
import { LabelHabitForm } from '../LabelHabitForm/LabelHabitForm';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { api } from '../../lib/axios';
import { ButtonCreateHabit } from '../ButtonCreateHabit/ButtonCreateHabit';

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export function NewHabitForm() {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title.trim() || weekDays.length === 0) {
      return;
    }

    await api.post('/habits', {
      title,
      weekDays,
    });

    setTitle('');
    setWeekDays([]);
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);

      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];

      setWeekDays(weekDaysWithAddedOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <LabelHabitForm text="Qual seu comprometimento?" htmlFor="titleHabit" />
      <input
        type="text"
        id="titleHabit"
        placeholder="Ex: Exercícios, dormir bem, etec..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-zinc-900"
        autoFocus
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <LabelHabitForm text="Qual a recorrência?" htmlFor="" marginTop={1} />

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            className="flex items-center gap-3 group focus:outline-none"
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-800 group-focus:ring-offset-2 group-focus:ring-offset-bgBlack">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="text-white font-medium leading-tight">
              {weekDay}
            </span>
          </Checkbox.Root>
        ))}
      </div>
      <ButtonCreateHabit />
    </form>
  );
}
