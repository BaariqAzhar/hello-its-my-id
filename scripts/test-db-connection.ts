import prisma from "@/lib/prisma";

async function main() {
  console.log("🚀 Testing database connection...");
  try {
    // Attempt to ping the database by executing a simple query
    const result = await prisma.$queryRaw`SELECT 1 as result`;
    console.log("✅ Database connection successful!");
    console.log("Result of 'SELECT 1':", result);

    // Check if we can find any users or a specific table to be more thorough
    // For now, SELECT 1 is enough for a "ping"
  } catch (error) {
    console.error("❌ Database connection failed!");
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
