import { useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import { ArrowLeft, Check } from 'phosphor-react';

export function ButtonCreateHabit() {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider swipeDirection="up">
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 focus:ring-offset-zinc-900"
        onClick={() => setOpen(true)}
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>

      <Toast.Root
        className="bg-zinc-900 text-white fixed rounded-md p-4 flex flex-col items-center justify-center gap-3 w-full h-full"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="mb-4 font-medium text-violet-500 text-6xl text-center">
          Novo hábito criado com sucesso
        </Toast.Title>
        <Toast.Description asChild>
          <h2 className="text-violet-300 text-center text-2xl mb-4">
            Parabéns por colocar mais um hábito na sua rotina 👏
          </h2>
        </Toast.Description>
        <Toast.Action
          className="w-2/6 p-4 rounded-full"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="flex items-center justify-center text-center">
            <ArrowLeft size={32} weight="light" />
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 p-6 flex flex-col items-center justify-center gap-3 w-full h-full max-w-full m-0 focus:outline-none" />
    </Toast.Provider>
  );
}
