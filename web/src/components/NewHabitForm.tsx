import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label className="font-semibold leading-tight" htmlFor="title">
        Qual seu comprometimento?
      </label>

      <input
        type={"text"}
        id="title"
        placeholder="ex: Exercícios, dormir, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />

      <label className="font-semibold leading-tight mt-4" htmlFor="title">
        Qual a recorrência?
      </label>

      <button
        type="submit"
        className="hover:bg-green-500 mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
