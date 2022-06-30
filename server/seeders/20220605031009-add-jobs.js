"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    const input = [
      {
        title: "Iron Technician I",
        description: `What does it mean to live the Caterpillar Experience?

        It means you play a part in building a better world. You contribute to a winning culture—a spirit of accountability—that has driven change on every continent for more than 90 years. To work with us is a commitment to improve sustainability, invent for the digital age and innovate in order to bring solutions to millions of people. Sure, you work for Caterpillar. But more importantly, you work for the good of your career, your family, your community and your world.
        
        As a company, we will take on every challenge that faces us, just as we have in the past. We will continue to lead in our industries because of employees like you. You’re here on purpose, with a purpose. Your work builds the world. You build what matters.
        
        We currently have an exciting opportunity at SPM Oil & Gas, a newly acquired Caterpillar company for a Iron Technician.
        
        The primary objective of the Iron Technician is to provide our customers with excellent engineering solutions through our products and superior customer service. This will be demonstrated through the observation of the core values of SPM Oil and Gas. In this role you will show consistency, accountability and reliability while exhibiting a high degree of integrity and a solid work ethic. Further you and active advocate of exemplary safety culture at all times. All written policies and procedures will be followed safely without deviation.`,
        jobType: "Full time",
        companyId: 3,
        authorId: 1,
        minSalary: 15_000_000,
        maxSalary: 20_000_000,
        benefit: `Health insurance.
        Paid time off (PTO) such as sick days and vacation days.
        Flexible and remote working options.
        Life insurance.
        Short-term disability.
        Long-term disability.
        Retirement benefits or accounts.`,
        vacancy: "vacant",
      },
      {
        title: "Iron Technician-3",
        description: `Job Duties/Responsibilities May Include, But Are Not Limited To
        Assist Iron Technicians during the disassemble phase
        Clean, strip and inspect all required flow control components
        Prepare flow control products for Gauging, Ultra Sonic, and MPI inspections
        Ability to demonstrate the disassemble of flow control products per Standard Operating Procedure (SOP)
        Ability to identify different products
        Assemble flow control product
        Nondestructive testing Trainee
        Manifold tear down/rebuild Trainee
        Proficient in tear down/rebuild of manifolds
        Inventory of customer product
        Ability to perform gauge inspections
        Ability to perform high pressure hydrostatic testing of customer flow control`,
        jobType: "Full time",
        companyId: 3,
        authorId: 1,
        minSalary: 25_000_000,
        maxSalary: 0,
        benefit: `Health insurance.
        Paid time off (PTO) such as sick days and vacation days.
        Flexible and remote working options.
        Life insurance.
        Short-term disability.
        Long-term disability.
        Retirement benefits or accounts.`,
        vacancy: "vacant",
      },
      {
        title: "Assembler",
        description:
          "As an Assembler, you will work on an assembly line or in an assembly station and safely perform all necessary functions to ensure quality products are delivered in a timely manner. Job duties include , but not limited to: Operate DC electric, pneumatic, and manual torque wrenches, Operate hydraulic press tooling, Operate overhead cranes for lifting heavy parts and assemblies, Put mechanical assemblies together using a variety of fastener types, Connect hydraulic hoses and route them through specific points, Connect electrical connections and route them through specific points, Pick multiple parts from multiple different storage locations in a manner to support your next build, Follow standard work, both visual and written instructions, to ensure product is built to meet engineering requirements, Inspect your own work for errors, Drive continuous improvement ideas related to safety, quality and efficiency with peers and support teams, Drive corrective action for repeat defects created from your process groups, Participate in daily communication dialogues with team, counterparts, and management, and use designated test equipment to validate machine builds.",
        jobType: "Full time",
        companyId: 3,
        authorId: 1,
        minSalary: 0,
        maxSalary: 20_000_000,
        benefit: `Medical insurance.
        Dental insurance 401(k).
        Vision insurance.`,
        vacancy: "vacant",
      },
      {
        title: "Senior Backend Engineer",
        description: `Write scalable, robust, testable, efficient, and easily maintainable code
        Build new product/feature based on product requirements
        Maintain and enhance current product
        Contribute in architectural and design decisions as well as agile process and DevOps culture improvement
        Keep aware and update with new product initiatives`,
        jobType: "Full time",
        companyId: 2,
        authorId: 1,
        minSalary: 30_000_000,
        maxSalary: 45_000_000,
        benefit: "",
        vacancy: "vacant",
      },
      {
        title: "Senior Devops Engineer",
        description: `Perform root cause analysis for production errors
        Build tools to reduce occurrences of errors and improve customer experience
        Investigate and resolve technical issues
        Design procedures for system troubleshooting and maintenance
        Implement adjustments or new infrastructure requirements
        Guide users on processes and tools
        `,
        jobType: "Full time",
        companyId: 2,
        authorId: 1,
        minSalary: 0,
        maxSalary: 0,
        benefit: `Laptop.
        Performance Bonus.
        Private Insurance.
        Free Lunch.
        Festive Allowance.
        Working in Multinational Environment.`,
        vacancy: "vacant",
      },
      {
        title: "Senior Devops Engineer",
        description: `Perform root cause analysis for production errors
        Build tools to reduce occurrences of errors and improve customer experience
        Investigate and resolve technical issues
        Design procedures for system troubleshooting and maintenance
        Implement adjustments or new infrastructure requirements
        Guide users on processes and tools
        `,
        jobType: "Full time",
        companyId: 1,
        authorId: 1,
        minSalary: 70_000_000,
        maxSalary: 0,
        benefit: `Laptop.
        Performance Bonus.
        Private Insurance.
        Free Lunch.
        Festive Allowance.
        Working in Multinational Environment.`,
        vacancy: "vacant",
      },
      {
        title: "Senior Backend Engineer",
        description: `Write scalable, robust, testable, efficient, and easily maintainable code
        Build new product/feature based on product requirements
        Maintain and enhance current product
        Contribute in architectural and design decisions as well as agile process and DevOps culture improvement
        Keep aware and update with new product initiatives`,
        jobType: "Full time",
        companyId: 1,
        authorId: 1,
        minSalary: 40_000_000,
        maxSalary: 55_000_000,
        benefit: `Laptop.
        Performance Bonus.
        Private Insurance.
        Free Lunch.
        Festive Allowance.
        Working in Multinational Environment.`,
        vacancy: "vacant",
      },
      {
        title: "Account Manager, Large Customer Sales (English, Bahasa Indonesia)",
        description: `Businesses that partner with Google come in all shapes, sizes and market caps, and no one Google advertising solution works for all. Your knowledge of online media combined with your communication skills and analytical abilities shapes how new and existing businesses grow. Using your relationship-building skills, you provide Google-caliber client service, research and market analysis. You anticipate how decisions are made, persistently explore and uncover the business needs of Google's key clients and understand how our range of product offerings can grow their business. Working with them, you set the vision and the strategy for how their advertising can reach thousands of users.

        As an Account Manager, you will build and cultivate relationships with customers to unlock incremental business through those relationships. Along with our Partner teams (i.e., global business managers, insights analysts, specialists, platform teams, etc.), you will develop scalable and cutting-edge solutions for our customers in order to optimize advertising and maximize the use of Google products (i.e., Search, Video, Display, Mobile, etc.).`,
        jobType: "Full time",
        companyId: 1,
        authorId: 1,
        minSalary: 0,
        maxSalary: 0,
        benefit: `Educational reimbursement.
        Googler-to-Googler peer learning and coaching platform.
        Donation matching and time off to volunteer.
        Employee resource groups for underrepresented employees and their allies.
        Internal Googler community groups and local culture clubs.`,
        vacancy: "vacant",
      },
      {
        title: "Metro Network Deployment Engineer",
        description: `In this role, you will work to deploy and maintain private data networks worldwide. You will work with Network Architects and Engineers, Design Engineers, Infrastructure Engineers, Field Engineers, Technical Project Managers, and other teams within Google, and construction and telecommunications Vendors and Contractors.

        You will be accountable to affect outcomes and facilitate better and more efficient outcomes. Your team's objective will be to build a scalable optical transport network to support users globally.
        `,
        jobType: "Full time",
        companyId: 1,
        authorId: 1,
        minSalary: 70_000_000,
        maxSalary: 100_000_000,
        benefit: `Fertility and growing family support.
        Parental leave and baby bonding leave.
        Caregiver leave.
        Backup childcare.
        Survivor income benefit.
        Paid time off, including vacation, bereavement, jury duty, sick leave, parental leave, disability, holidays, and global reset/wellbeing days.
        Hybrid work model — two work from home days each week for most roles.
        Remote work opportunities available.
        Four “work from anywhere” weeks per year.
        Part-time work and job-sharing options.      
        `,
        vacancy: "vacant",
      },
    ]
    input.forEach((el) => {
      el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert("Jobs", input)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
