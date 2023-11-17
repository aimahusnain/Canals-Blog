'use client'

export default function Button({
    text,
    onClick,
  }: {
    text: string;
    onClick: () => void;
  }) {
    return (
      <button
        className="rounded-full bg-primary py-3 px-7 text-white shadow-md shadow-primary/40 hover:shadow-primary/30 hover:shadow-xl transition duration-1000 ease-in-out font-medium text-base"
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  //focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp