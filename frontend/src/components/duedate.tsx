function DueDate({ dueDate }: { dueDate: string }) {
  return (
    <div className="badge badge-warning gap-2 p-3 font-semibold text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-4 h-4 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Due: {dueDate}
    </div>
  );
}

export default DueDate;
