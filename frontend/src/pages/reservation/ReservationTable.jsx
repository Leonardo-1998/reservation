import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function StatusBadge({ status }) {
  const isAvailable = status === "Available";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
        isAvailable
          ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800"
          : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"
      }`}
    >
      {status}
    </span>
  );
}

export default function ReservationTable({
  reservations,
  scheduleTime,
  onCellClick,
}) {
  const getReservationStatus = (timeSlot, courtName) => {
    const startTimeInSlot = timeSlot.split(" - ")[0];
    const found = reservations?.find((res) => {
      return (
        res.startTime <= startTimeInSlot &&
        res.endTime > startTimeInSlot &&
        res.court === courtName
      );
    });
    return found ? "Reserved" : "Available";
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
          <TableRow>
            <TableHead className="w-[150px] font-bold">Waktu</TableHead>
            <TableHead className="text-center font-bold">Lapangan A</TableHead>
            <TableHead className="text-center font-bold">Lapangan B</TableHead>
            <TableHead className="text-center font-bold">Lapangan C</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scheduleTime.map((time, index) => {
            return (
              <TableRow
                key={index}
                className="hover:bg-slate-100/50 dark:hover:bg-slate-700/50"
              >
                <TableCell className="font-medium">{time}</TableCell>
                {["Lapangan A", "Lapangan B", "Lapangan C"].map((court) => {
                  const status = getReservationStatus(time, court);
                  return (
                    <TableCell
                      key={court}
                      className="text-center cursor-pointer"
                      onClick={() =>
                        status === "Available" && onCellClick?.(time, court)
                      }
                    >
                      <StatusBadge status={status} />
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
