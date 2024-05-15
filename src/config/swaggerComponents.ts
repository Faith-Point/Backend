// src/config/swaggerComponents.ts

export const swaggerComponents = {
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'The user ID' },
          name: { type: 'string', description: 'The user name' },
          email: { type: 'string', description: 'The user email' },
          password: { type: 'string', description: 'The user password' },
          role: { $ref: '#/components/schemas/Role' },
          address: { $ref: '#/components/schemas/Address' },
          created_at: { type: 'string', format: 'date-time', description: 'The date the user was created' },
          updated_at: { type: 'string', format: 'date-time', description: 'The date the user was last updated' },
          deleted_at: { type: 'string', format: 'date-time', description: 'The date the user was deleted' },
        },
      },
      Role: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'The role ID' },
          name: { type: 'string', description: 'The role name' },
          created_at: { type: 'string', format: 'date-time', description: 'The date the role was created' },
          updated_at: { type: 'string', format: 'date-time', description: 'The date the role was last updated' },
          deleted_at: { type: 'string', format: 'date-time', description: 'The date the role was deleted' },
        },
      },
      Address: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'The address ID' },
          street: { type: 'string', description: 'The street name' },
          number: { type: 'string', description: 'The street number' },
          complement: { type: 'string', description: 'The address complement' },
          neighborhood: { type: 'string', description: 'The neighborhood' },
          city: { $ref: '#/components/schemas/City' },
          created_at: { type: 'string', format: 'date-time', description: 'The date the address was created' },
          updated_at: { type: 'string', format: 'date-time', description: 'The date the address was last updated' },
          deleted_at: { type: 'string', format: 'date-time', description: 'The date the address was deleted' },
        },
      },
      City: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'The city ID' },
          name: { type: 'string', description: 'The city name' },
          state: { $ref: '#/components/schemas/State' },
          created_at: { type: 'string', format: 'date-time', description: 'The date the city was created' },
          updated_at: { type: 'string', format: 'date-time', description: 'The date the city was last updated' },
          deleted_at: { type: 'string', format: 'date-time', description: 'The date the city was deleted' },
        },
      },
      State: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'The state ID' },
          name: { type: 'string', description: 'The state name' },
          country: { $ref: '#/components/schemas/Country' },
          created_at: { type: 'string', format: 'date-time', description: 'The date the state was created' },
          updated_at: { type: 'string', format: 'date-time', description: 'The date the state was last updated' },
          deleted_at: { type: 'string', format: 'date-time', description: 'The date the state was deleted' },
        },
      },
      Country: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'The country ID' },
          name: { type: 'string', description: 'The country name' },
          created_at: { type: 'string', format: 'date-time', description: 'The date the country was created' },
          updated_at: { type: 'string', format: 'date-time', description: 'The date the country was last updated' },
          deleted_at: { type: 'string', format: 'date-time', description: 'The date the country was deleted' },
        },
      Auth: {
        type: 'object',
        properties: {
          email: { type: 'string', description: 'The user email' },
          password: { type: 'string', description: 'The user password' },
        },
      },
      TypeAuth: {
        type: 'object',
        properties: {
          user: { $ref: '#/components/schemas/User' },
          log: { $ref: '#/components/schemas/Log' },
        },
      },
      }
      },
    },
  };

export default swaggerComponents;
