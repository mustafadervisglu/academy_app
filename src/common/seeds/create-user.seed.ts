//  import { Factory, Seeder } from 'typeorm-seeding';
// import { Connection, DataSource } from 'typeorm';
// import * as faker from 'faker';
// import { UserService } from 'src/user/user.service';
// import { Users } from 'src/user/entity/user.entity';
// import { Branch } from 'src/branch/entity/branch.entity';
// import { JobTitle } from 'src/user/entity/job-title.entity';
// import { Role } from 'src/auth/entity/role.entity';
// import { ContactInfo } from 'src/user/entity/contact.entity';
// import { UserRole } from 'src/user/entity/user-role.entity';
// import { UserBranch } from 'src/user/entity/user-branch.entity';
// import { MailService } from 'src/mail/mail.service';
// import { MailerService } from '@nestjs-modules/mailer';
//
// export default class CreateUsers implements Seeder {
//   public async run(factory: Factory, dataSource: DataSource): Promise<void> {
//     const userRepository = dataSource.getRepository(Users);
//     const branchRepository = dataSource.getRepository(Branch);
//     const jobTitleRepository = dataSource.getRepository(JobTitle);
//     const roleRepository = dataSource.getRepository(Role);
//     const contactInfoRepository = dataSource.getRepository(ContactInfo);
//     const userRoleRepository = dataSource.getRepository(UserRole);
//     const userBranchRepository = dataSource.getRepository(UserBranch);
//
//     const userService = new UserService(
//       userRepository,
//       branchRepository,
//       jobTitleRepository,
//       roleRepository,
//       contactInfoRepository,
//       userRoleRepository,
//       userBranchRepository,
//     );
//
//     for (let i = 1; i < 2; i++) {
//       const firstName = faker.name.firstName();
//       const lastName = faker.name.lastName();
//
//       const userData = {
//         tckn: `1234567891${i}`,
//         username: faker.internet.userName(firstName, lastName),
//         email: faker.internet.email(firstName, lastName),
//         firstName: firstName,
//         lastName: lastName,
//         status: true,
//         jobTitleId: '012d8981-ce80-4b2b-9fc3-2735976d20b2',
//         branchIds: ['07707b77-550f-47b5-a22c-bf7a4f8b905f'],
//         roleIds: ['1'],
//         alternativeEmail: faker.internet.email(
//           firstName,
//           lastName,
//           'example.com',
//         ),
//         address: faker.address.streetAddress(),
//         phoneNumber: faker.phone.phoneNumber('+90555#######'),
//         landline: faker.phone.phoneNumber('+90212#######'),
//         twitterHandle: `@${faker.internet.userName(firstName, lastName)}`,
//         facebookProfile: `facebook.com/${faker.internet.userName(
//           firstName,
//           lastName,
//         )}`,
//         linkedinProfile: `linkedin.com/in/${faker.internet.userName(
//           firstName,
//           lastName,
//         )}`,
//         postalCode: faker.address.zipCode(),
//         city: faker.address.city(),
//         district: faker.address.county(),
//       };
//
//       try {
//         await userService.createUser(userData);
//       } catch (error) {
//         console.error(`Kullanıcı oluşturulurken hata: ${error.message}`);
//       }
//     }
//   }
// }
