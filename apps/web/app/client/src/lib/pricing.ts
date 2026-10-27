import { differenceInCalendarDays } from "date-fns";

export const SERVICE_FEE_RATE = 0.08;
export const EXTRA_PET_DISCOUNT = 0.2;

export function nightsBetween(checkIn?: Date, checkOut?: Date) {
  if (!checkIn || !checkOut) return 0;
  return Math.max(0, differenceInCalendarDays(checkOut, checkIn));
}

/** Price per day applies to the first pet; each additional pet is 20% off. */
export function priceBreakdown(pricePerDay: number, nights: number, pets: number) {
  const petCount = Math.max(1, pets);
  const perNight = pricePerDay + (petCount - 1) * pricePerDay * (1 - EXTRA_PET_DISCOUNT);
  const subtotal = Math.round(perNight * nights);
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  return { perNight: Math.round(perNight), subtotal, serviceFee, total: subtotal + serviceFee };
}

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
