-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('owner', 'sitter');

-- CreateEnum
CREATE TYPE "verified_status" AS ENUM ('basic', 'govtId_approved', 'advance');

-- CreateEnum
CREATE TYPE "Booking_status" AS ENUM ('pending', 'confirm', 'completed', 'cancelled');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_no" TEXT,
    "role" "userRole" NOT NULL,
    "verified_status" "verified_status" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pets" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "pet_name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "behaviour" TEXT NOT NULL,
    "diet_note" TEXT NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sitter" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "home_details" TEXT NOT NULL,
    "price_per_day" INTEGER NOT NULL,

    CONSTRAINT "Sitter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "sitter_id" TEXT NOT NULL,
    "availability" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "id" TEXT NOT NULL,
    "pet_id" TEXT NOT NULL,
    "sitter_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "status" "Booking_status" NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "booking_id" TEXT NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_no_key" ON "User"("phone_no");

-- CreateIndex
CREATE UNIQUE INDEX "Sitter_user_id_key" ON "Sitter"("user_id");

-- AddForeignKey
ALTER TABLE "Pets" ADD CONSTRAINT "Pets_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sitter" ADD CONSTRAINT "Sitter_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_sitter_id_fkey" FOREIGN KEY ("sitter_id") REFERENCES "Sitter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_sitter_id_fkey" FOREIGN KEY ("sitter_id") REFERENCES "Sitter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
