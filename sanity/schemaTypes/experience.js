export const experience = ({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name:"jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
    },
    {
      name: "company",
      title: "Company",
      type: "text",
      options:{
        hotspot: true,
      }
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date"
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
      options:{
        hotspot: true,
      }
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{type: "reference", to: {type:"skill"}}],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{type: "string"}],
    },
  ],
})
