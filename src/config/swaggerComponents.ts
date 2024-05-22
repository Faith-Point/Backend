// src/config/swaggerComponents.ts

export const swaggerComponents = {
  components: {
    schemas: {
      Country: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
          },
          short_name: {
            type: 'string',
            maxLength: 2,
          },
          long_name: {
            type: 'string',
            maxLength: 32,
          },
          code: {
            type: 'string',
            maxLength: 32,
          },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
          deleted_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        State:{
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
            },
            short_name: {
              type: 'string',
              maxLength: 2,
            },
            long_name: {
              type: 'string',
              maxLength: 32,
            },
            code: {
              type: 'string',
              maxLength: 32,
            },
            country_id: {
             $ref: '#/components/schemas/Country',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
            },
            deleted_at: {
              type: 'string',
              format: 'date-time',
            },
          },
          City: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                format: 'uuid',
              },
              short_name: {
                type: 'string',
                maxLength: 2,
              },
              long_name: {
                type: 'string',
                maxLength: 32,
              },
              code: {
                type: 'string',
                maxLength: 32,
              },
              state_id: {
                $ref: '#/components/schemas/State',
              },
              created_at: {
                type: 'string',
                format: 'date-time',
              },
              updated_at: {
                type: 'string',
                format: 'date-time',
              },
              deleted_at: {
                type: 'string',
                format: 'date-time',
              },
            },
          },
          Address: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                format: 'uuid',
              },
              street: {
                type: 'string',
                maxLength: 255,
              },
              number: {
                type: 'string',
                maxLength: 32,
              },
              complement: {
                type: 'string',
                maxLength: 255,
              },
              neighborhood: {
                type: 'string',
                maxLength: 255,
              },
              city_id: {
                $ref: '#/components/schemas/City',
              },
              created_at: {
                type: 'string',
                format: 'date-time',
              },
              updated_at: {
                type: 'string',
                format: 'date-time',
              },
              deleted_at: {
                type: 'string',
                format: 'date-time',
              },
            },
            Role: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  format: 'uuid',
                },
                name: {
                  type: 'string',
                  maxLength: 32,
                },
                description: {
                  type: 'string',
                  maxLength: 255,
                },
                created_at: {
                  type: 'string',
                  format: 'date-time',
                },
                updated_at: {
                  type: 'string',
                  format: 'date-time',
                },
                deleted_at: {
                  type: 'string',
                  format: 'date-time',
                },
              },
              User: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    format: 'uuid',
                  },
                  name: {
                    type: 'string',
                    maxLength: 255,
                  },
                  email: {
                    type: 'string',
                    format: 'email',
                    maxLength: 255,
                  },
                  password: {
                    type: 'string',
                    maxLength: 255,
                  },
                  role_id: {
                    $ref: '#/components/schemas/Role',
                  },
                  address_id: {
                    $ref: '#/components/schemas/Address',
                  },
                  created_at: {
                    type: 'string',
                    format: 'date-time',
                  },
                  updated_at: {
                    type: 'string',
                    format: 'date-time',
                  },
                  deleted_at: {
                    type: 'string',
                    format: 'date-time',
                  },
                },
                LogAuth: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      format: 'uuid',
                    },
                    user_id: {
                      $ref: '#/components/schemas/User',
                    },
                    token: {
                      type: 'string',
                      maxLength: 255,
                    },
                    created_at: {
                      type: 'string',
                      format: 'date-time',
                    },
                    updated_at: {
                      type: 'string',
                      format: 'date-time',
                    },
                    deleted_at: {
                      type: 'string',
                      format: 'date-time',
                    },
                  },
                }
              }
            }
          }
        }
      }
    },
  },
};

export default swaggerComponents;
