export function Button({ onClick, children }) {
    return (
      <button
        className="bg-limon w-full rounded-full px-4 py-2 my-2 disabled:bg-indigo-300 mt-7"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }