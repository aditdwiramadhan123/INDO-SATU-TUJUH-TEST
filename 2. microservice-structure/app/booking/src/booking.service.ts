import { Injectable } from "@nestjs/common";

@Injectable()
export class BookingService {
  private bookings: any[] = [];

  createBooking(data: any) {
    const booking = {
      id: Date.now().toString(),
      ...data,
    };
    this.bookings.push(booking);
    return { message: "Booking created!", booking };
  }

  getBooking(id: string) {
    const booking = this.bookings.find((b) => b.id === id);
    return booking || { message: "Booking not found" };
  }
}
