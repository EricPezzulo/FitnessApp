import { PrismaClient } from "@prisma/client";
import { workouts } from "../workouts";
const prisma = new PrismaClient();

async function main() {
  await prisma.workout.createMany({
    data: workouts,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });