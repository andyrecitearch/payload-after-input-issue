import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed

    {
      type: 'text',
      name: 'customField',
      admin: {
        components: {
          Field: {
            path: 'src/app/custom-fields/custom-field.tsx',
            exportName: 'CustomField',
          },
          afterInput: [
            {
              path: 'src/app/custom-fields/after-input.tsx',
              exportName: 'AfterInput',
            },
          ],
          beforeInput: [
            {
              path: 'src/app/custom-fields/after-input.tsx',
              exportName: 'AfterInput',
            },
          ],
        },
      },
    },
  ],
}
