import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const scheduleData = [
  { time: "09.00 - 10.00", A: "Kosong", B: "Kosong", C: "Kosong" },
  { time: "10.00 - 11.00", A: "Kosong", B: "Reservasi_A", C: "Kosong" },
  { time: "11.00 - 12.00", A: "Reservasi_B", B: "Kosong", C: "Reservasi_C" },
  { time: "12.00 - 13.00", A: "Kosong", B: "Kosong", C: "Kosong" },
  { time: "13.00 - 14.00", A: "Kosong", B: "Kosong", C: "Kosong" },
  { time: "14.00 - 15.00", A: "Kosong", B: "Kosong", C: "Kosong" },
  { time: "15.00 - 16.00", A: "Kosong", B: "Kosong", C: "Kosong" },
  { time: "16.00 - 17.00", A: "Kosong", B: "Kosong", C: "Kosong" },
];

export default function ReservationList() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [selectedLocation, setSelectedLocation] = useState("Bandung");

  const handleAddReservation = () => {
    navigate(
      `/reservasi/tambah?date=${selectedDate}&location=${selectedLocation}`,
    );
  };

  return (
    <div className="flex-1 p-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Jadwal Lapangan
            </h1>
            <p className="text-sm text-muted-foreground">
              Lihat ketersediaan dan buat reservasi baru.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase text-muted-foreground">
                Lokasi
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-slate-100 dark:bg-slate-700 border-none rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
              >
                <option value="Bandung">Bandung</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Surabaya">Surabaya</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold uppercase text-muted-foreground">
                Tanggal
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-slate-100 dark:bg-slate-700 border-none rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button onClick={handleAddReservation} className="mt-auto">
              Tambah Reservasi
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
              <TableRow>
                <TableHead className="w-[150px] font-bold">Waktu</TableHead>
                <TableHead className="text-center font-bold">
                  Lapangan A
                </TableHead>
                <TableHead className="text-center font-bold">
                  Lapangan B
                </TableHead>
                <TableHead className="text-center font-bold">
                  Lapangan C
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleData.map((row, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-slate-100/50 dark:hover:bg-slate-700/50"
                >
                  <TableCell className="font-medium">{row.time}</TableCell>
                  <TableCell className="text-center">
                    <StatusBadge status={row.A} />
                  </TableCell>
                  <TableCell className="text-center">
                    <StatusBadge status={row.B} />
                  </TableCell>
                  <TableCell className="text-center">
                    <StatusBadge status={row.C} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const isAvailable = status === "Kosong";
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
