require("dotenv").config();
const { sequelize, User, Category, Event } = require("../models");

async function seed() {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate([
    { name: "Wakaf & Pembangunan" },
    { name: "Pendidikan & Dakwah" },
    { name: "Kemanusiaan & Bencana" },
    { name: "Sedekah & Pangan" },
  ]);

  const admin = await User.create({
    full_name: "Admin AmalSholeh",
    email: "admin@amalsholeh.id",
    password_hash: "admin123",
    role: "admin",
  });

  const volunteer = await User.create({
    full_name: "Siti Aminah",
    email: "sahabat@amalsholeh.id",
    password_hash: "sahabat123",
    role: "volunteer",
  });

  await Event.bulkCreate([
    {
      category_id: categories[0].id,
      title: "Wakaf Pembangunan Sarana Wudhu Masjid Al-Barokah",
      description: "Program wakaf bersama untuk pembangunan dan perbaikan tempat wudhu serta sanitasi Masjid Al-Barokah agar jamaah beribadah lebih nyaman.",
      location: "Masjid Al-Barokah, Coblong, Bandung",
      quota: 50,
      event_date: "2026-09-05",
      start_time: "07:00:00",
      end_time: "11:00:00",
    },
    {
      category_id: categories[1].id,
      title: "Program Mengaji & Pembagian Iqra Gratis Anak Yatim",
      description: "Program pembinaan mengaji bagi anak-anak yatim dan dhuafa, serta pembagian buku Iqra dan Al-Qur'an gratis.",
      location: "Aula Yayasan AmalSholeh, Bandung",
      quota: 25,
      event_date: "2026-09-12",
      start_time: "09:00:00",
      end_time: "12:00:00",
    },
  ]);

  console.log("✅ Seed selesai. Akun demo:");
  console.log("   Admin         : admin@amalsholeh.id / admin123");
  console.log("   Sahabat Amal  : sahabat@amalsholeh.id / sahabat123");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
