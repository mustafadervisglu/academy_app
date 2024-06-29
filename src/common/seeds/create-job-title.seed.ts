// import { Factory, Seeder } from 'typeorm-seeding';
// import { DataSource } from 'typeorm';
// import { JobTitle } from 'src/user/entity/job-title.entity';
//
// export default class CreateJobTitles implements Seeder {
//   public async run(factory: Factory, dataSource: DataSource): Promise<void> {
//     const jobTitles = [
//       'Öğretmen',
//       'Müdür Yardımcısı',
//       'Müdür (Geçici)',
//       'Müdür',
//       'Müdür Başyardımcısı',
//       'İl Milli Eğitim Müdürü',
//       'İlçe Milli Eğitim Müdürü',
//       'Şube Müdürü',
//       'ARGE',
//       'Üniversitede Görevli',
//       'Emekli',
//       'Araştırma Görevlisi',
//       'Okul Öncesi Öğretmenliği',
//       'Bölge Koordinatörü',
//       'Diğer',
//     ];
//
//     for (const title of jobTitles) {
//       console.log('title', title);
//       await dataSource
//         .createQueryBuilder()
//         .insert()
//         .into(JobTitle)
//         .values({ titleName: title })
//         .execute();
//     }
//   }
// }
