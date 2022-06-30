"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    const input = [
      {
        name: "Firebase Megah",
        companyLogo: "https://cdn-images-1.medium.com/max/1200/1*ti5CnGh_T4Kqy5aCTLJRcg.png",
        location: "Silicon Valley, USA",
        email: "firebase@email.com",
        description:
          "Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure.",
        companyBanner: "https://firebase.google.com/images/social.png",
      },
      {
        name: "OVO Bakar Uang",
        companyLogo:
          "https://play-lh.googleusercontent.com/yNGcOowg9DNn4YTEaeOT7Q99-5PCM2F0pnlxFDlZ-tngTV_IS-eq_R1AbQkYNTrC3_o",
        location: "Jln. Jenderal Sudirman, Jakarta, Indonesia",
        email: "ovo@email.com",
        description:
          "OVO adalah aplikasi smart yang memberikan Anda kemudahan dalam bertransaksi (OVO Cash) dan juga kesempatan yang lebih besar untuk mengumpulkan poin di banyak tempat (OVO Points).",
        companyBanner: "https://blogpictures.99.co/cara-menggunakan-ovo.jpg",
      },
      {
        name: "Caterpillar Inc.",
        companyLogo:
          "https://media-exp2.licdn.com/dms/image/C560BAQHBGJctBrPk_g/company-logo_200_200/0/1616001049269?e=1662595200&v=beta&t=hKNjWewkYQlKR2OsTui7WYGLicnQjiF4CVyyBoxtDx4",
        location: "Deerfield, Illinois, USA",
        email: "caterpillarInc@email.com",
        description: `Since 1925, Caterpillar Inc. has been helping our customers build a better world – making sustainable progress possible and driving positive change on every continent.

        With 2020 sales and revenues of $51.0 billion, Caterpillar Inc. is the world’s leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.
        
        We do business on every continent, principally operating through three primary segments – Construction Industries, Resource Industries, and Energy & Transportation – and providing financing and related services through our Financial Products segment.`,
        companyBanner: "https://hartaban.com/assets/slider_image/slide_8.jpg",
      },
    ]
    input.forEach((input) => {
      input.createdAt = input.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Companies", input)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {})
  },
}
