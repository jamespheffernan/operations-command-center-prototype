type Props = {
  status: "pending" | "in_progress" | "resolved";
};

const mapping: Record<Props["status"], { label: string; className: string }> = {
  pending: { label: "Pending", className: "bg-amber-100 text-amber-700" },
  in_progress: { label: "In progress", className: "bg-sky-100 text-sky-700" },
  resolved: { label: "Resolved", className: "bg-emerald-100 text-emerald-700" },
};

export default function Badge({ status }: Props) {
  const info = mapping[status] ?? mapping.pending;
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${info.className}`}
    >
      {info.label}
    </span>
  );
}
