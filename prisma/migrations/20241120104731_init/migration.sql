-- CreateEnum
CREATE TYPE "ContactSecurityStatus" AS ENUM ('PENDING_VERIFICATION', 'VERIFIED', 'FLAGGED');

-- CreateEnum
CREATE TYPE "ContactMessageStatus" AS ENUM ('PENDING_VERIFICATION', 'PENDING', 'ACTIONED', 'IGNORED');

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "companyName" TEXT,
    "status" "ContactSecurityStatus" NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" SERIAL NOT NULL,
    "contactId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "status" "ContactMessageStatus" NOT NULL,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContactMessage" ADD CONSTRAINT "ContactMessage_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
