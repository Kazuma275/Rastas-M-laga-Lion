import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimeSlot {
  time: string;
  available: boolean;
  booked?: boolean;
}

interface CalendarProps {
  onSelectDateTime?: (date: Date, time: string) => void;
}

const Calendar = ({ onSelectDateTime }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < today;
      const isToday = date.getTime() === today.getTime();
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push({
        date,
        isCurrentMonth,
        isPast,
        isToday,
        isSelected,
        isAvailable: isCurrentMonth && !isPast,
      });
    }

    return days;
  };

  // Available time slots
  const timeSlots: TimeSlot[] = [
    { time: "09:00", available: true },
    { time: "10:00", available: false, booked: true },
    { time: "11:00", available: true },
    { time: "12:00", available: true },
    { time: "14:00", available: true },
    { time: "15:00", available: false, booked: true },
    { time: "16:00", available: true },
    { time: "17:00", available: true },
    { time: "18:00", available: true },
    { time: "19:00", available: false, booked: true },
  ];

  const calendarDays = generateCalendarDays();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  const handleDateSelect = (date: Date) => {
    if (date >= new Date(new Date().setHours(0, 0, 0, 0))) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate && onSelectDateTime) {
      onSelectDateTime(selectedDate, time);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calendar */}
      <Card className="border-rasta-green-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-rasta-black-800">
              Selecciona una Fecha
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevMonth}
                className="h-8 w-8 border-rasta-green-300 hover:bg-rasta-green-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-lg font-semibold text-rasta-black-800 min-w-[120px] text-center">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextMonth}
                className="h-8 w-8 border-rasta-green-300 hover:bg-rasta-green-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-rasta-black-600 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDateSelect(day.date)}
                disabled={!day.isAvailable}
                className={cn(
                  "aspect-square p-2 text-sm rounded-lg transition-all",
                  {
                    "text-rasta-black-400 cursor-not-allowed":
                      !day.isCurrentMonth || day.isPast,
                    "text-rasta-black-800 hover:bg-rasta-green-50":
                      day.isCurrentMonth && day.isAvailable,
                    "bg-rasta-gold-300 text-rasta-black-800 font-bold":
                      day.isToday,
                    "bg-rasta-green-600 text-white": day.isSelected,
                    "border-2 border-rasta-red-600":
                      day.isToday && day.isSelected,
                  },
                )}
              >
                {day.date.getDate()}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-rasta-gold-300 rounded mr-2"></div>
              <span className="text-rasta-black-600">Hoy</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-rasta-green-600 rounded mr-2"></div>
              <span className="text-rasta-black-600">Seleccionado</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-rasta-black-200 rounded mr-2"></div>
              <span className="text-rasta-black-600">No disponible</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Slots */}
      <Card className="border-rasta-green-200">
        <CardHeader>
          <CardTitle className="text-xl text-rasta-black-800 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-rasta-green-600" />
            Horarios Disponibles
          </CardTitle>
          <CardDescription className="text-rasta-black-600">
            {selectedDate
              ? `${selectedDate.toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}`
              : "Selecciona una fecha para ver los horarios"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => slot.available && handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={cn(
                    "p-3 rounded-lg border-2 transition-all text-left",
                    {
                      "border-rasta-green-300 bg-white hover:bg-rasta-green-50 text-rasta-black-800":
                        slot.available && selectedTime !== slot.time,
                      "border-rasta-green-600 bg-rasta-green-600 text-white":
                        slot.available && selectedTime === slot.time,
                      "border-rasta-red-200 bg-rasta-red-50 text-rasta-red-600 cursor-not-allowed":
                        !slot.available,
                    },
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{slot.time}</span>
                    {slot.available ? (
                      <CheckCircle
                        className={cn("h-4 w-4", {
                          "text-rasta-green-600": selectedTime !== slot.time,
                          "text-white": selectedTime === slot.time,
                        })}
                      />
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-rasta-red-100 text-rasta-red-700 text-xs"
                      >
                        Ocupado
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <User className="mx-auto h-12 w-12 text-rasta-black-300 mb-4" />
              <p className="text-rasta-black-500">
                Selecciona una fecha para ver los horarios disponibles
              </p>
            </div>
          )}

          {selectedDate && selectedTime && (
            <div className="mt-6 p-4 bg-rasta-green-50 rounded-lg border-2 border-rasta-green-200">
              <h4 className="font-semibold text-rasta-green-800 mb-2">
                Cita Seleccionada:
              </h4>
              <p className="text-rasta-green-700">
                <strong>Fecha:</strong>{" "}
                {selectedDate.toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-rasta-green-700">
                <strong>Hora:</strong> {selectedTime}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
